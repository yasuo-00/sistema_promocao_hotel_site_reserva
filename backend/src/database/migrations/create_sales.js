exports.up = function (knex) {
    return knex.schema.createTabel('sales', function (table){
        table.increments('id_sales').primary();
        table.string('id_hotel').notNullable();
        table.string('id_booking_site').notNullable();
        table.decimal('price', 6,2).notNullable();
        table.dateTime('start_date').notNullable();
        table.dateTime('end_date').notNullable();

        table.foreign('id_hotel').references('id_user').inTable('hotel').onDelete('CASCADE');
        table.foreign('id_booking_site').references('id_user').inTable('booking_site').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('sales');
}

