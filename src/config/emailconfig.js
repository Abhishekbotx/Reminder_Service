const nodemailer = require('nodemailer');

const { MAIL_USER, MAIL_PASS,MAIL_HOST } = require('./serverconfig');
console.log(MAIL_USER, MAIL_PASS,MAIL_HOST);
const sender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS // generated ethereal password
    }
});

module.exports = sender;