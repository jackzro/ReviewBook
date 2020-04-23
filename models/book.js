'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class Book extends Model{}


  Book.init({
    title: DataTypes.STRING,
    writer: DataTypes.STRING,
    publisher: DataTypes.STRING,
    price: DataTypes.INTEGER,
    released_year: DataTypes.INTEGER
  }, {sequelize});

  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.User,{through:models.UserBook})
  };

  return Book;
};