exports.up = function (knex) {
    return knex.schema.createTable('hotel', function (table){
        table.integer('id_user').primary();
        table.string('cnpj').notNullable().unique();
        table.string('city').notNullable();

        table.foreign('id_user').references('id_user').inTable('user').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('hotel');
}

