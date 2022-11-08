const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookscategories', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'book_id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookscategories',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bookId" },
          { name: "categoryId" },
        ]
      },
      {
        name: "categoryId",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
    ]
  });
};
