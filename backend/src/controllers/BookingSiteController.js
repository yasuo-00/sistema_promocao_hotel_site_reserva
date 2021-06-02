const path = require('path');

module.exports={

    async create(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/users/admin/addBookingSite/')});
    },

    async list(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/commonPages/listBookingSite/')});
    },

    async listAll(request, response) {
        try {
            const bookingSiteList = await connection('booking_site')
                .join('user', 'user.id_user', '=', 'booking_site.id_user')
                .select('booking_site.id_user','booking_site.name', 'user.email', 'booking_site.url');
            return response.status(200).json({bookingSiteList});
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    }
}
