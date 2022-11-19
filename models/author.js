const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../connect/database')
const Books = require('./book')
class Author extends Model {}
Author.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        field: 'author_id'
    },
    full_name: {
        type: Sequelize.STRING(100),
        allowNull:false
    }
},{
    sequelize: db,
    timestamps:false,
    modelName: "author",
})
module.exports = Author