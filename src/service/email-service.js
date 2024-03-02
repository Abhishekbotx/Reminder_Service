const sender = require('../config/emailconfig');
const TicketRepository = require('../repository/email-repository')
const repo = new TicketRepository();

const sendbasicemail = async (mailFrom, mailTo, subject, body) => {
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

module.exports={createTicket,sendbasicemail,fetchPendingEmails,updateTicket}