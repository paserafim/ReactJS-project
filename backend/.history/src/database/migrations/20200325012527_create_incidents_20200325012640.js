
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

    });
};

exports.down = function(knex) {
  
};
