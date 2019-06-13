module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    storeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    storeCategory: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sale: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    storeCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    storeState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stopDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  // Post.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Post;
};
