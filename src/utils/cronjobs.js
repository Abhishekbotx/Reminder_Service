const cron=require('node-cron');

const setupcron=()=>{
    cron.schedule('*/10 * * * * *', () => {
        console.log('running a task every two minutes')
    })
}

setupcron()