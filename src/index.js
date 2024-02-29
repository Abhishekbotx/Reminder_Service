const express=require('express');
const app=express();
const {PORT}=require('./config/serverconfig')
const sender=require('../src/config/emailconfig')
const{template}=require('./pct')
// const fs = require('fs');
// const path=require('path')
// const filePath = path.join(__dirname, 'index.js');


// const emailTemplate = fs.readFileSync(filePath, 'utf8');
// console.log(filePath)
// console.log(emailTemplate)
const serverstarter=()=>{
    app.listen(PORT,async()=>{
        console.log(`server started on port: ${PORT}`)
        // const mailsender=await sender.sendMail({
        //     from: '"STUDY NOTION 👻" ',
        //     to: 'Abhishekbotx@gmail.com',
        //     subject: "testing",
        //     text:`   <h1>hello</h1>`
            
        // })
         
        // console.log(mailsender)

        

    })
}

// serverstarter()