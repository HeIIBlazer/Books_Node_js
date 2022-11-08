var DataTypes = require("sequelize").DataTypes;
var _authors = require("./authors");
var _authorsbooks = require("./authorsbooks");
var _books = require("./books");
var _bookscategories = require("./bookscategories");
var _categories = require("./categories");

function initModels(sequelize) {
  var authors = _authors(sequelize, DataTypes);
  var authorsbooks = _authorsbooks(sequelize, DataTypes);
  var books = _books(sequelize, DataTypes);
  var bookscategories = _bookscategories(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);

  authors.belongsToMany(books, { as: 'bookId_books', through: authorsbooks, foreignKey: "authorId", otherKey: "bookId" });
  books.belongsToMany(authors, { as: 'authorId_authors', through: authorsbooks, foreignKey: "bookId", otherKey: "authorId" });
  books.belongsToMany(categories, { as: 'categoryId_categories', through: bookscategories, foreignKey: "bookId", otherKey: "categoryId" });
  categories.belongsToMany(books, { as: 'bookId_books_bookscategories', through: bookscategories, foreignKey: "categoryId", otherKey: "bookId" });
  authorsbooks.belongsTo(authors, { as: "author", foreignKey: "authorId"});
  authors.hasMany(authorsbooks, { as: "authorsbooks", foreignKey: "authorId"});
  authorsbooks.belongsTo(books, { as: "book", foreignKey: "bookId"});
  books.hasMany(authorsbooks, { as: "authorsbooks", foreignKey: "bookId"});
  bookscategories.belongsTo(books, { as: "book", foreignKey: "bookId"});
  books.hasMany(bookscategories, { as: "bookscategories", foreignKey: "bookId"});
  bookscategories.belongsTo(categories, { as: "category", foreignKey: "categoryId"});
  categories.hasMany(bookscategories, { as: "bookscategories", foreignKey: "categoryId"});

  return {
    authors,
    authorsbooks,
    books,
    bookscategories,
    categories,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
