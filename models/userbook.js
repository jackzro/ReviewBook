'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class UserBook extends Model{}

  UserBook.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {sequelize});

  UserBook.associate = function(models) {
    // associations can be defined here
  };
  return UserBook;
};