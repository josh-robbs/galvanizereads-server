exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function(table){
    table.increments()
    table.string('firstName')
    table.string('lastName')
    table.text('bio')
    table.string('picURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')
};
