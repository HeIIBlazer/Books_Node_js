const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isbn: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    thumbnailUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shortDescription: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    longDescription: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('PUBLISH','MEAP'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  });
};
