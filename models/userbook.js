'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class UserBook extends Model{
    static Delete(req){
      return UserBook.destroy({
        where:{
            BookId:Number(req.book),
            UserId:Number(req.user)
        }
      })
    }
  }

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