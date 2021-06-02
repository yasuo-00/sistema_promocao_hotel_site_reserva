const path = require('path');
const connection = require('../database/connection');

module.exports={

    async addSales(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/addSales/')});
    },

    async listAll(request,response){
        try {
            console.log('entered');
            const salesList = await connection('sales')
                .join('hotel', 'sales.id_hotel','=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site','=', 'booking_site.id_user')
                .select('hotel.id_user','booking_site.id_user','hotel.name as hotel_name','booking_site.name as booking_site_name','booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date');
            console.log(salesList);
            return response.status(200).json({salesList});
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    }
}