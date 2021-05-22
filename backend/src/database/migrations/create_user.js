exports.up = function (knex) {
    return knex.schema.createTable('user', function (table){
        table.increments('id_user').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.enu('type', ['admin', 'hotel', 'booking_site']).notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('user');
}

