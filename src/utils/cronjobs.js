const cron=require('node-cron');
const sender=require('../config/emailconfig')
const {fetchPendingEmails,sendbasicemail,updateTicket}=require('../service/email-service')
console.log('before setupcron')
const setupcron=()=>{
    cron.schedule('*/30  * * * * *', async() => {
        console.log('inside setupcron before response ')
    //    const response= await fetchPendingEmails()
    //    response.forEach((element) => {
            
    //    }); 
    const response=await fetchPendingEmails();
    response.forEach((element) => {
        // 
        const mailsender= sender.sendMail({
        from: '"AIRNET Airlines 👻"<abhi> ',
        to: element.recipientEmail,
        subject: "testing",
        text:`  Hello  `,
        
        
        },async(err,data)=>{
            if(err){
                throw err
            }
            else{
                console.log(data)
                await updateTicket(element.id,{status:"Success"})
            }
        })
        console.log(mailsender)
    
    });
   
    })
}

setupcron()