const dotenv=require('dotenv')
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    MAIL_USER:process.env.MAIL_USER,
    MAIL_PASS:process.env.MAIL_PASS,
    MAIL_HOST:process.env.MAIL_HOST,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY 
}