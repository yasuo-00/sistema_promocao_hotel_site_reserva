
const path = require('path');

module.exports={

    async userHome(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/commonPages/userHome/')});
    },

    async home(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/home/')});
    },

    async login(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/login/')});
    },
    async logout(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/home/')});
    },

    async register(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/register/')});
    },

    async profile(request, response){
        response.sendFile('index.html',{root: path.resolve('../frontend/pages/commonPages/profile/')});
    }
}