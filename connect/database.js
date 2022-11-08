const {Sequelize} = require('sequelize');
const connection = new Sequelize('books_jptv20','root','',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = connection