exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', function (table) {
    table.integer('author_id').references('author.id').onDelete('cascade')
    table.integer('book_id').references('book.id').onDelete('cascade')
    table.primary(['author_id', 'book_id'])
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')  
};