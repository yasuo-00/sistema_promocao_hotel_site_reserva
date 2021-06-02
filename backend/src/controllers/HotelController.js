const path = require('path');
const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/users/admin/addHotel') });
    },

    async list(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/listHotel/') });
    },

    async listAll(request, response) {
        try {
            const hotelList = await connection('hotel')
                .join('user', 'user.id_user', '=', 'hotel.id_user')
                .select('hotel.id_user', 'user.email', 'hotel.cnpj', 'hotel.city');
            return response.status(200).json({hotelList});
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    }
}
