module.exports = function(sequelize, DataTypes) {
  var Discount = sequelize.define("Discount", {
    store: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 600]
      }
    },

    salesPercent: {
      type: DataTypes.DECIMAL
    },

    comment: {
      type: DataTypes.TEXT
    }
  });
  return Discount;
};
