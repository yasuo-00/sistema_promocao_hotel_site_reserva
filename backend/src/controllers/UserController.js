
const path = require('path');
const connection = require('../database/connection');

module.exports = {
    //redireciona para pagina home do usuario logado
    async userHome(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/userHome/') });
    },

    //redireciona para home (sem login)
    async home(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/home/') });
    },

    //funcao de logar usuario
    async login(request, response) {
        const { email, password } = request.body;
        console.log(email, password);
        try {
            //returns the user data, if exists on database
            const user = await connection('user')
                .where('email', email)
                .select('id_user', 'email', 'password', 'type').first();
            if (user !== undefined) {
                if (user.password === password) {
                    return response.status(200).json({ user });
                }
                return response.status(401).json({ error: 'Email or password is wrong' })
            }
            return response.status(401).json({ error: 'Email or password is wrong' })
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao efetuar login, tente mais tarde' });
        }
    },

    //redireciona usuario logado para pagina home  (sem login)
    async logout(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/home/') });
    },

    //redireciona para pagina de cadastro
    async register(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/register/') });
    },

    //redireciona para pagina de perfil do usuario
    async profile(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/profile/') });
    },

    //edita campos do usuario
    async edit(request, response) {
        console.log('here');
        const { id_user, email } = request.body;
        console.log(request.body);
        try {
            await connection('user')
                .where('id_user', id_user)
                .update({ email: email })
            return response.status(200).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao editar perfil, tente mais tarde' });
        }
    }

}