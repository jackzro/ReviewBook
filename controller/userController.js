const {User,Book,UserBook}=require('../models')
// const bcrypt = require('bcryptjs')

class UserController{
    static show(req,res){
        User.All()
        .then((data=>{
            res.render('usertable',{data})
        })).catch((err=>{
            res.send(err)
        }))
    }

    static seereview(req,res){
        User.findOne({
            where:{
                id:Number(req.params.id)
            },
            include:[{model:Book}]
        })
        .then(data=>{
            res.render('reviewtable',{data})
        }).catch((err=>{
            res.send(err)
        }))
    }

    static delete(req,res){
        UserBook.Delete(req.params)
        .then(data=>{
            res.redirect(`/user/seereview/${req.params.user}`)
        }).catch((err=>{
            res.send(err)
        }))
    }

}

module.exports=UserController