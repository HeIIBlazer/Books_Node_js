const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorsbooks', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'authors',
        key: 'author_id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'book_id'
      }
    }
  }, {
    sequelize,
    tableName: 'authorsbooks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "authorId" },
          { name: "bookId" },
        ]
      },
      {
        name: "bookId",
        using: "BTREE",
        fields: [
          { name: "bookId" },
        ]
      },
    ]
  });
};
