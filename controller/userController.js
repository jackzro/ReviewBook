const {User,Book,UserBook}=require('../models')
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

    static seereview(req,res){
        console.log(req.params.id)
        User.findOne({
            where:{
                id:Number(req.params.id)
            },
            include:[{model:Book}]
        })
        .then(data=>{
            // res.send(data)
            res.render('reviewtable',{data})
        }).catch((err=>{
            res.send(err)
        }))
    }

    static delete(req,res){
        UserBook.destroy({
            where:{
                BookId:Number(req.params.book),
                UserId:Number(req.params.user)
            }
        })
        .then(data=>{
            // res.send(data)
            res.redirect(`/user/seereview/${req.params.user}`)
        }).catch((err=>{
            res.send(err)
        }))
    }

}

module.exports=UserController