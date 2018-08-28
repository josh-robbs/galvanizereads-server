
const database = require('./database-connection')

module.exports = {
  listBooks(){
    return database('book')
      .select('book.cover_url', 'book.title', 'author.first_name', 'author.last_name', 'book.genre', 'book.description')
      .from('book')
      .innerJoin('author_book', 'book.id', 'author_book.book_id')
      .innerJoin('author', 'author.id', 'author_book.author_id')
  },
  listAuthors(){
    return database('author').select('author.pic_url', 'author.first_name', 'author.last_name', 'author.bio', 'book.title')
    .from('author')
    .innerJoin('author_book', 'author.id', 'author_book.author_id') 
    .innerJoin('book', 'book.id', 'author_book.book_id') 
  },
  listAuthorsById(id){
    return database('author').select('author.pic_url', 'author.first_name', 'author.last_name', 'author.bio', 'book.title')
    .from('author')
    .innerJoin('author_book', 'author.id', 'author_book.author_id') 
    .innerJoin('book', 'book.id', 'author_book.book_id') 
    .where('book.id',id)
  },
  list(tableName){
    return database(tableName).select()
  },
  read(id,tableName){
    // send in column name to query for anything
    return database(tableName).select().where('id', id)
  },
  post(product,tableName){
    return database(tableName)
      .insert(product)
      .returning('*')
      .then(record => record[0])
  },
  delete(id,tableName){
    return database(tableName)
      .delete()
      .where('id', id)
  },
  update(id,product,tableName){
    return database(tableName)
      .update(product)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  }
}