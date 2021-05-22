exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('hotel').del()
    .then(function () {
        // Inserts seed entries
        return knex('hotel').insert([
            {
                id_user:2,
                cnpj:'2222',
                city:'São Paulo'
            },
            {
                id_user:3,
                cnpj:'3333',
                city:'Campinas'
            },
            {
                id_user:4,
                cnpj:'4444',
                city:'São Paulo',
            }
        ]);
    });
};