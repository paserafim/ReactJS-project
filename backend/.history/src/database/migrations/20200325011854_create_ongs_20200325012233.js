
exports.up = function (knex) {
    knex.schemma.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('what').notNullable();
        table.string('name').notNullable();
    });
};

exports.down = function (knex) {

};
