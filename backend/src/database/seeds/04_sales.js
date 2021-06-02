exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('sales').del()
    .then(function () {
        return knex('sales').insert([
            {
                id_sales:1,
                id_hotel:2,
                id_booking_site:5,
                price:60,
                start_date:'2021-06-10T15:30:00.000Z',
                end_date:'2021-07-10T15:30:00.000Z',
            },
            {
                id_sales:2,
                id_hotel:3,
                id_booking_site:5,
                price:80,
                start_date:'2021-06-10T15:30:00.000Z',
                end_date:'2021-07-10T15:30:00.000Z',
            },
            {
                id_sales:3,
                id_hotel:2,
                id_booking_site:6,
                price:60,
                start_date:'2021-06-05T15:30:00.000Z',
                end_date:'2021-07-28T15:30:00.000Z',
            },
        ]);
    });
}
