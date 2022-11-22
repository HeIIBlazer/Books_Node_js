const { DataTypes, Model } = require('sequelize');
const db = require('../connect/database');
const Book = require('./book');
const Author = require('./author');

class authorsbooks extends Model {}
authorsbooks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Book,
                key: 'id'
            }
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Author,
                key: 'id'
            }
        },
    },
    {
        sequelize: db,
        modelName: 'book_author',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['bookId', 'authorId']
            }
        ]
    }
);

module.exports = authorsbooks;