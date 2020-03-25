
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id')

    });
};

exports.down = function(knex) {
  
};
