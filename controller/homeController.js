const {User}=require('../models')
const bcrypt = require('bcryptjs')

class HomeController{

    static home(req,res){
        res.render('home')
    }

    static register(req,res){
        res.render('register')
    }
    
    static registerPost(req,res){
        // res.send(req.body)
        User.create({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
        })
        .then(()=>{
            res.redirect('/')
        }).catch((err=>{
            res.send(err)
        }))
    }

    static login(req,res){
        res.render('login')
    }

    static loginPost(req,res){
        User.findOne({
            where:{
                username:req.body.username
            }
        }).then((user)=>{
            if(!user){
                res.send(`Username ${req.body.username} need to Register`)
            }else {
                if(bcrypt.compareSync(req.body.password,user.password)){
                    req.session.userId=user.id
                    // res.send(req.session)
                    res.redirect('/user')
                }else{ 
                    res.send('Username or password is wrong')
                }
            }
        }).catch((err=>{
            res.send(err)
        }))
    }
}

module.exports=HomeController