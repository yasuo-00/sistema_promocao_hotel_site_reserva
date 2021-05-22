exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('booking_site').del()
    .then(function () {
        // Inserts seed entries
        return knex('booking_site').insert([
            {
                id_user:5,
                url:'trivago.com.br'
            },
            {
                id_user:6,
                url:'hotelurbano.com.br'
            }
        ]);
    });
};