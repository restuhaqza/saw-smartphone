'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    detail: DataTypes.STRING,
    memory: DataTypes.INTEGER,
    storage: DataTypes.INTEGER,
    camera: DataTypes.INTEGER,
    screen: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};