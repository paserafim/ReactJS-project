
exports.up = function(knex) {
    knex.schemma.createTable('ongs', function (table) {
      table.string('id').prima
    });
};

exports.down = function(knex) {
  
};
