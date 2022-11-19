let Book = require('./models/book');
let Author = require('./models/author');
let Category = require('./models/category');
let BookCategory = require('./models/booksCategories');
let AuthorBook = require('./models/authorsBooks');

Book.belongsToMany(Author, { through: AuthorBook });
Book.belongsToMany(Category, { through: BookCategory });
Author.belongsToMany(Book, { through: AuthorBook });
Category.belongsToMany(Book, { through: BookCategory });

const db = require('./connect/database');
const books_json = require('./jsonParse/Data');
const createBooks = require('./jsonParse/Insert');

async function fetchBooks() {
    const str_books_json = JSON.stringify(books_json);
    const books = JSON.parse(str_books_json);
    await db.sync({ alter: true });
    return books;
}
fetchBooks().then(books => {
    createBooks(books);
});