module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 600]
      }
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 600]
      }
    }
  });
  return Place;
};
