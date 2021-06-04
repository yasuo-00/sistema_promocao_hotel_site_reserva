const { request, response } = require('express');
const path = require('path');
const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/users/admin/addHotel') });
    },

    async register(request, response) {
        const { name, email, password, cnpj, city, daily_rate } = request.body;
        try {
            const user = await connection('user')
                .insert({
                    email: email,
                    password: password,
                    type: 'hotel',
                }).catch(function (error) {
                    console.error(error);
                    return response.status(403).json({ error: error });
                });
            await connection('hotel')
                .insert({
                    id_user: user[0],
                    name: name,
                    cnpj: cnpj,
                    city: city,
                    daily_rate: daily_rate
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
        response.sendFile('index.html', { root: path.resolve('../frontend/pages/commonPages/listHotel/') });
    },

    async listAll(request, response) {
        try {
            const hotelList = await connection('hotel')
                .join('user', 'user.id_user', '=', 'hotel.id_user')
                .select('hotel.id_user', 'hotel.name', 'user.email', 'hotel.cnpj', 'hotel.city', 'hotel.daily_rate');
            return response.status(200).json({ hotelList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async listByName(request, response) {
        const { query } = request.body;
        try {
            const hotelList = await connection('user')
                .join('hotel', 'user.id_user', '=', 'hotel.id_user')
                .where('hotel.name', 'like', '%' + query + '%')
                .select('hotel.id_user', 'hotel.name', 'user.email', 'hotel.cnpj', 'hotel.city', 'hotel.daily_rate');
            return response.status(200).json({ hotelList });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async getHotelById(request, response) {
        const { id } = request.body;
        try {
            const hotel = await connection('user')
                .where('hotel.id_user', id)
                .join('hotel', 'user.id_user', '=', 'hotel.id_user')
                .select('hotel.id_user', 'hotel.name', 'user.email', 'hotel.cnpj', 'hotel.city', 'hotel.daily_rate')
                .first();
            return response.status(200).json({ hotel });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    async edit(request, response) {
        const { id_user, email, name, city, description } = request.body;
        try {
            await connection('user')
                .where('id_user', id_user)
                .update({
                    email: email
                })
            await connection('hotel')
                .where('id_user', id_user)
                .update({
                    name: name,
                    city: city
                })
            return response.status(200).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao editar perfil, tente mais tarde' });
        }
    }
}
