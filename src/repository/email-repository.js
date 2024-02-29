const { NotificationTicket } = require('../models/index');
const { Op } = require("sequelize");


class TicketRepository{
    async create(data){
        try {
            const ticket=await NotificationTicket.create(data)
            return ticket
        } catch (error) {
            console.error(error)
            throw error
        }
    }


}

module.exports=TicketRepository