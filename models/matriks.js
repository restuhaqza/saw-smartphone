'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matriks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  matriks.init({
    id_product: DataTypes.INTEGER,
    k1: DataTypes.INTEGER,
    k2: DataTypes.INTEGER,
    k3: DataTypes.INTEGER,
    k4: DataTypes.INTEGER,
    k5: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'matriks',
  });
  return matriks;
};