const nodemailer = require('nodemailer');

const { MAIL_USER, MAIL_PASS,MAIL_HOST } = require('./serverconfig');
console.log(MAIL_USER, MAIL_PASS,MAIL_HOST);
const sender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS 
    }
});

module.exports = sender;