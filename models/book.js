'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class Book extends Model{

    static Add(req){
      return Book.create({
        title:req.title,
        writer:req.writer,
        publisher:req.publisher,
        price:req.price,
        released_year:req.releasedyear
    })
    }
  }


  Book.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Title is required'
        }
      }
    },
    writer: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Writer is required'
        }
      }
    },
    publisher: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Publisher is required'
        }
      }
    },
    price: {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:'Price is required'
        }
      }
    },
    released_year: {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:'Released Year is required'
        }
      }
    }
    // writer: DataTypes.STRING,
    // publisher: DataTypes.STRING,
    // price: DataTypes.INTEGER,
    // released_year: DataTypes.INTEGER
  }, {sequelize});

  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.User,{through:models.UserBook})
  };

  return Book;
};