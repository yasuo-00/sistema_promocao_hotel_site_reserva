
const path = require('path');
const connection = require('../database/connection');

module.exports = {

    async userHome(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/userHome/') });
    },

    async home(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/home/') });
    },

    async login(request, response) {
        if (request.method === 'POST') {
            const {email, password} = request.body;
            console.log(email, password);
            try{
                //returns the user data, if exists on database
                const user = await connection('user')
                                .where('email', email)
                                .select('id_user', 'email', 'password', 'type').first();
                if (user!== undefined){
                    if(user.password===password){
                        return response.status(200).json({ message: 'Login efetuado' });
                    }
                    return response.status(401).json({error: 'Email or password is wrong'})
                }
                return response.status(401).json({error: 'Email or password is wrong'})
            }catch(error){
                return response.status(500).json({error: 'Erro ao efetuar login, tente mais tarde'});
            }
        }else{
            response.sendFile('index.html', { root: path.resolve('../frontend/pages/login/') });
        }
    },
    async logout(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/home/') });
    },

    async register(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/register/') });
    },

    async profile(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/profile/') });
    }
}