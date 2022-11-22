let Category = require('./models/category');
let Book = require('./models/book');
let Author = require('./models/author');
let BooksCategories = require('./models/bookscategories');
let AuthorsBooks = require('./models/authorsbooks');

Book.belongsToMany(Author, { through: AuthorsBooks });
Book.belongsToMany(Category, { through: BooksCategories });
Author.belongsToMany(Book, { through: AuthorsBooks });
Category.belongsToMany(Book, { through: BooksCategories });

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