const { DataTypes, Model, Sequelize } = require('sequelize');
const db = require('../connect/database');
const Category = require('../models/Category');

class Book extends Model {}
Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isbn: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        pageCount: {
            type: DataTypes.INTEGER,
        },
        publishedDate: {
            type: DataTypes.DATE,
        },
        thumbnailUrl: {
            type: DataTypes.STRING(255)
        },
        longDescription: {
            type: DataTypes.STRING(255)
        },
        shortDescription: {
            type: DataTypes.STRING(255)
        },
        status: {
            type: DataTypes.ENUM('PUBLISH', 'NOT PUBLISH'),
            defaultValue: 'NOT PUBLISH'
        },
    },
    {
        sequelize: db,
        modelName: 'book',
        timestamps: false,
        paranoid: true,
        // include:[
        //     {
        //         model: Category, 
        //     }
        // ]
    }
);

module.exports = Book;