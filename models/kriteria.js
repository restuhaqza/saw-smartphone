'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kriteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  kriteria.init({
    kode: DataTypes.STRING,
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
    type: DataTypes.ENUM('cost','benefit')
  }, {
    sequelize,
    modelName: 'kriteria',
  });
  return kriteria;
};