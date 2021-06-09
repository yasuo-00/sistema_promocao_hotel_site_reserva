const path = require('path');
const connection = require('../database/connection');

module.exports = {

    //adiciona promocao
    async addSales(request, response) {
        if (request.method === 'POST') {
            const { booking_site_id, hotel_id, price, initial_date, final_date } = request.body;
            try {
                await connection('sales')
                    .insert({
                        id_hotel: hotel_id,
                        id_booking_site: booking_site_id,
                        price: price,
                        start_date: initial_date,
                        end_date: final_date
                    })
            } catch (error) {
                return response.status(500).json({ error: error });
            }
            return response.status(200).send();
        } else {
            response.sendFile('index.html', { root: path.resolve('../frontend/pages/addSales/') });
        }
    },

    //lista todas as promocoes
    async listAll(request, response) {
        try {
            const salesList = await connection('sales')
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description')
                .orderBy('sales.start_date', 'asc');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    //lista promocoes por hotel
    async listByHotel(request, response) {
        const { id_hotel } = request.body;
        try {
            const salesList = await connection('sales')
                .where('sales.id_hotel', id_hotel)
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .orderBy('sales.start_date', 'asc')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    //lista promocoes pelo nome do hotel
    async listByHotelName(request, response) {
        const { hotel_name } = request.body;
        try {
            const salesList = await connection('sales')
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .where('hotel.name', 'like', '%' + hotel_name + '%')
                .orderBy('sales.start_date', 'asc')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    //lista promocoes pelo site de reserva
    async listByBookingSite(request, response) {
        const { id_booking_site } = request.body;
        try {
            const salesList = await connection('sales')
                .where('sales.id_booking_site', id_booking_site)
                .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                .orderBy('sales.start_date', 'asc')
                .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date');
            return response.status(200).json({ salesList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async listByFilter(request, response) {
        const { id_user='none', start_date, end_date, destination='' } = request.body;
        console.log(id_user, start_date, end_date)
        try {
            const type = await connection('user')
                .where('id_user', id_user)
                .select('type')
                .first();
            var salesList = undefined
            //se o usuario pesquisar apenas pela cidade de destino
            if(start_date==='' && end_date===''){
                switch (type){
                    case 'hotel':
                        salesList = await connection('sales')
                        .where('sales.id_hotel', id_user)
                        .where('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date','hotel.description');
                        break;
                    case 'booking_site':
                        salesList = await connection('sales')
                        .where('sales.booking_site', id_user)
                        .where('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date','hotel.description');
                        break;
                    default:
                        salesList = await connection('sales')
                        .where('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date','hotel.description');
                }
                return response.status(200).json({ salesList });
            }
            //se ele pesquisar apenas pela data de checkin (destino opcional)
            if (end_date === '') {
                console.log('end_dste')
                switch (type){
                    case 'hotel':
                        salesList = await connection('sales')
                        .where('sales.id_hotel', id_user)
                        .andWhere('sales.start_date','<=',start_date)
                        .andWhere('sales.end_date','>=', start_date)
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                        break;
                    case 'booking_site':
                        salesList = await connection('sales')
                        .where('sales.booking_site', id_user)
                        .andWhere('sales.start_date','<=',start_date)
                        .andWhere('sales.end_date','>=', start_date)
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                        break;
                    default:
                        salesList = await connection('sales')
                        .where('sales.start_date','<=',start_date)
                        .andWhere('sales.end_date','>=', start_date)
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                }
                console.log(salesList)
                return response.status(200).json({ salesList });
            } else { //se pesquisar pela data de checkin e checkout (destino opcional)
                switch (type){
                    case 'hotel':
                        salesList = await connection('sales')
                        .where('sales.id_hotel', id_user)
                        .andWhere(function (){
                            this.where('sales.start_date','>=',start_date)
                            .orWhere('sales.end_date','<=',end_date)
                        })
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                        break;
                    case 'booking_site':
                        salesList = await connection('sales')
                        .where('sales.booking_site', id_user)
                        .andWhere(function (){
                            this.where('sales.start_date','>=',start_date)
                            .orWhere('sales.end_date','<=',end_date)
                        })
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                        break;
                    default:
                        console.log('here')
                        salesList = await connection('sales')
                        .where(function (){
                            this.where('sales.start_date','<=',start_date)
                            .andWhere('sales.end_date','>=',end_date)
                        })
                        .andWhere('hotel.city','like', '%'+destination+'%')
                        .join('hotel', 'sales.id_hotel', '=', 'hotel.id_user')
                        .join('booking_site', 'sales.id_booking_site', '=', 'booking_site.id_user')
                        .orderBy('sales.start_date', 'asc')
                        .select('hotel.id_user', 'booking_site.id_user', 'hotel.name as hotel_name', 'booking_site.url', 'hotel.city', 'hotel.daily_rate', 'sales.start_date', 'sales.end_date', 'hotel.description');
                }
                console.log(salesList)
                return response.status(200).json({ salesList });
            }
        }catch (error){
            return response.status(500).json({ error: error });
        }
    }

}