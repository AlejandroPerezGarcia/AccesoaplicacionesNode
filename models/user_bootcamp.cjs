'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Users, Bootcamp } = models
      this.belongsTo(Users)
      this.belongsTo(Bootcamp)

    }
  }
  User_bootcamp.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bootcamp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User_bootcamp',
  });
  return User_bootcamp;
};