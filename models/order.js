'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User)
      Order.hasMany(models.Order_item)
    }
  };
  Order.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    sumPrice: DataTypes.INTEGER,
    isPaid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};