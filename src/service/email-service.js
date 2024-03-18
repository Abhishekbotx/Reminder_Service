const sender = require('../config/emailconfig');
const TicketRepository = require('../repository/email-repository')
const repo = new TicketRepository();

const sendBasicemail = async (mailFrom, mailTo, subject, body) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: body
        })
        return response
    } catch (error) {
        throw error
    }
}

const createTicket = async (data) => {
    try {
        const ticket = await repo.create({
            subject: data.subject,
            content: data.content,
            recipientEmail: data.recipientEmail,
            notificationTime:data.notificationTime
        })
        return ticket
    } catch (error) {
        throw error
    }
}

const fetchPendingEmails=async()=>{
    const response=await repo.get({status:'Pending'});
    return response
}

const updateTicket=async(ticketId,data)=>{
    try {
        const ticket=await repo.update(ticketId,data)
        return ticket
    } catch (error) {
        throw error
    }
}

const subscribeEvents = async (payload) => {
    let service = payload.service;
    let data = payload.data;
    switch(service) {
        case 'CREATE_TICKET':
            await createTicket(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicemail(data);
            break;
        default: 
            console.log('No valid event received');
            break;
    }
}

module.exports={createTicket,
                sendBasicemail,
                fetchPendingEmails,
                updateTicket,
                subscribeEvents}