const sender = require('../config/emailconfig');
const TicketRepository = require('../repository/email-repository')
const repo = new TicketRepository();

const sendbasicemail = async (mailFrom, mailTo, subject, body) => {
    try {
        const response = await sender.sendMail({
            mailFrom, mailTo, subject, body
        })
        return response
    } catch (error) {
        throw error
    }
}

const createTicket = async (data) => {
    const ticket = await repo.create({
        subject: data.subject,
        content: data.content,
        recepientEmail: data.email
    })
}

const sendmail = async () => {

}

module.exports(createTicket,sendbasicemail)