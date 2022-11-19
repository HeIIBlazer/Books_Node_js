const {Sequelize} = require('sequelize');
const connection = new Sequelize('Books2022','root','',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = connection