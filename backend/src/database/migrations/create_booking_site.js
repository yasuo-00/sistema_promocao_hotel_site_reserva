exports.up = function (knex) {
    return knex.schema.createTable('booking_site', function (table){
        table.integer('id_user').primary();
        table.string('name').notNullable();
        table.string('url').notNullable().unique();

        table.foreign('id_user').references('id_user').inTable('user').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('booking_site');
}

