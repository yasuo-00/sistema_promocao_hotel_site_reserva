const path = require('path');
const connection = require('../database/connection');

module.exports = {

    async addSales(request, response) {
        if (request.method === 'POST') {
            const {booking_site_id, hotel_id, price, initial_date, final_date} = request.body;
            try{
                await connection('sales')
                    .insert({
                        id_hotel:hotel_id,
                        id_booking_site: booking_site_id,
                        price:price,
                        start_date:initial_date,
                        end_date:final_date
                    })
            }catch (error){
                return response.status(500).json({ error: error });
            }
            return response.status(200).send();
        } else {
            response.sendFile('index.html', { root: path.resolve('../frontend/pages/addSales/') });
        }
    },

    async listAll(request, response) {
        try {
            const salesList = await connection('sales')
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.name as booking_site_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async listByHotel(request, response) {
        const { id_hotel } = request.body;
        try {
            const salesList = await connection('sales')
                .where('sales.id_hotel', id_hotel)
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.name as booking_site_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async listByBookingSite(request, response) {
        const { id_booking_site } = request.body;
        try {
            const salesList = await connection('sales')
                .where('sales.id_booking_site', id_booking_site)
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.name as booking_site_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    }

}