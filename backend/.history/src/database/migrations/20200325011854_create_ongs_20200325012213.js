
exports.up = function (knex) {
    knex.schemma.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name')
    });
};

exports.down = function (knex) {

};
