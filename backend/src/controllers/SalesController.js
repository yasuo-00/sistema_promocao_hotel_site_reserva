const path = require('path');

module.exports={

    async addSales(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/addSales/')});
    }
}