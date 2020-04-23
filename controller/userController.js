const {User}=require('../models')
// const bcrypt = require('bcryptjs')

class UserController{
    static show(req,res){
        User.findAll()
        .then((data=>{
            res.render('usertable',{data})
        })).catch((err=>{
            res.send(err)
        }))
    }
}

module.exports=UserController