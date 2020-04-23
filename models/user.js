'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class User extends Model{}

  User.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Name is required'
        }
      }
    },
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Username is required'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Password is required'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Email is required'
        }
      }
    }
  }, {sequelize});

  User.beforeCreate((instance,options)=>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(instance.password, salt);
    instance.password=hash
  })

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Book,{through:models.UserBook})
  };
  return User;
};