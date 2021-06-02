exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('hotel').del()
    .then(function () {
        // Inserts seed entries
        return knex('hotel').insert([
            {
                id_user:2,
                name:'Ibis Hotel',
                cnpj:'2222',
                city:'São Paulo',
                daily_rate:100.00,
            },
            {
                id_user:3,
                name:'Ibirapuera Hotel',
                cnpj:'3333',
                city:'Campinas',
                daily_rate:89.99,
            },
            {
                id_user:4,
                cnpj:'4444',
                name:'Bourbon Hotel',
                city:'São Paulo',
                daily_rate:189.90,
            }
        ]);
    });
};