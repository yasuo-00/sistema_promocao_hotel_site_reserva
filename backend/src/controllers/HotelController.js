const path = require('path');

module.exports={

    async list(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/commonPages/listHotel/')});
    }
}
