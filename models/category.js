const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../connect/database')
class Category extends Model {}
Category.init ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        field: 'category_id',
    },
    categoryName: {
        type: DataTypes.STRING,
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
    modelName: "category",
    timestamps:false
    // tableName: "category"
})
module.exports = Category