const { request, response } = require('express');
const path = require('path');
const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/users/admin/addBookingSite/') });
    },

    async register(request, response) {
        const { name, email, password, url } = request.body;
        try {
            const user = await connection('user')
                .insert({
                    email: email,
                    password: password,
                    type: 'booking_site',
                }).catch(function (error) {
                    console.error(error);
                    return response.status(403).json({ error: error });
                });
            await connection('booking_site')
                .insert({
                    id_user:user[0],
                    name:name,
                    url:url,
                }).catch(function (error) {
                    console.error(error);
                    return response.status(403).json({ error: error });
                });
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async list(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/listBookingSite/') });
    },

    async listAll(request, response) {
        try {
            const bookingSiteList = await connection('booking_site')
                .join('user', 'user.id_user', '=', 'booking_site.id_user')
                .select('booking_site.id_user', 'booking_site.name', 'user.email', 'booking_site.url');
            return response.status(200).json({ bookingSiteList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async getBookingSiteById(request, response){
        const {id} = request.body;
        console.log(request.body);
        try {
            const bookingSite = await connection('booking_site')
                .where('booking_site.id_user', id)
                .join('user', 'user.id_user', '=', 'booking_site.id_user')
                .select('booking_site.id_user', 'booking_site.name', 'user.email', 'booking_site.url')
                .first();
            return response.status(200).json({ bookingSite });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async edit(request, response){
        const {id_user, email, name, url} = request.body;
        try{
            await connection('user')
                .where('id_user', id_user)
                .update({
                    email: email,
                })
            await connection('booking_site')
                    .where('id_user', id_user)
                    .update({
                        name: name,
                        url:url
                    })
            return response.status(200).send();
        }catch (error){
            return response.status(500).json({error: 'Erro ao editar perfil, tente mais tarde'});
        }
    }
}
