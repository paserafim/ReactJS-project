
exports.up = function(knex) {
    knex.schemma.createTable('ongs', function (table) {
      table.string
    });
};

exports.down = function(knex) {
  
};
