
exports.up = function(knex) {
    knex.schemma.createTable('ongs', function (table) {
      table.string('id')
    });
};

exports.down = function(knex) {
  
};
