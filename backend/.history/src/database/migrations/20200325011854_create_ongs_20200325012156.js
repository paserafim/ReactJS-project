
exports.up = function (knex) {
    knex.schemma.createTable('ongs', function (table) {
        table.string('id').primary();
    });
};

exports.down = function (knex) {

};
