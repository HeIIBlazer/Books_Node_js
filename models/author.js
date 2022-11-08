const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../connect/database')
const Books = require('./books')
class Author extends Model {}
Author.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        field: 'author_id'
    },
    fullname: {
        type: Sequelize.STRING(100),
        allowNull:false
    }
    // createdAt: {
    //     type:DataTypes.DATE,
    //     defaultValue: Sequelize.fn('NOW'),
    //     allowNull: false
    // },
    // updatedAt: {
    //     type:DataTypes.DATE,
    //     defaultValue: Sequelize.fn('NOW'),
    //     allowNull: false
    // }
},{
    sequelize: db,
    timestamps:false,
    modelName: "author",
})
module.exports = Author