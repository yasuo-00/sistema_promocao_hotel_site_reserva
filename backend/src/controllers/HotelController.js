const path = require('path');

module.exports={

    async create(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/users/admin/addHotel')});
    },

    async list(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/commonPages/listHotel/')});
    }
}
