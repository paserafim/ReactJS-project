
exports.up = function (knex) {
    knex.schemma.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('nome')
    });
};

exports.down = function (knex) {

};
