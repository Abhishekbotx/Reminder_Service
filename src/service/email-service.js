const sender=require('../config/emailconfig');

const sendbasicemail=async(mailFrom,mailTo,subject,body)=>{
    try {
        const response =await sender.sendMail({
            mailFrom,mailTo,subject,body
        })
        return response
    } catch (error) {
        throw error
    }
}