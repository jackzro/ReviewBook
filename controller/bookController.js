const {User,Book}=require('../models')
// const bcrypt = require('bcryptjs')

class BookController{
    static show(req,res){
        Book.findAll()
        .then((data=>{
            res.render('usertable',{data})
        })).catch((err=>{
            res.send(err)
        }))
    }
}

module.exports=BookController