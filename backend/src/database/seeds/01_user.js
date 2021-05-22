exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('user').del()
    .then(function () {
        // Inserts seed entries
        return knex('user').insert([
            {
                id_user: 1,
                email: 'admin@admin.com',
                password:'admin123',
                type:'admin',

            },
            {
                id_user:2,
                email:'ibis@ibis.com',
                password:'ibis123',
                type:'hotel'
            },
            {
                id_user:3,
                email:'ibirapuera@ibirapuera.com',
                password:'ibirapuera123',
                type:'hotel',
            },
            {
                id_user:4,
                email:'bourbon@bourbon.com',
                password:'bourbon123',
                type:'hotel',
            },
            {
                id_user: 5,
                email:'trivago@trivago.com',
                password:'trivago123',
                type:'booking_site',
            },
            {
                id_user: 6,
                email:'hotelurbano@hotelurbano.com',
                password:'hotelurbano123',
                type:'booking_site'
            }
        ]);
    });
};
