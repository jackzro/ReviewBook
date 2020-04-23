const router=require('express').Router()
const userController=require('../controller/userController')

function chechkSession(req,res,next){
    if(req.session.userId){
        next()
    }else {
        res.send('Not Authorized')
    }
}

router.get('/', chechkSession, userController.show)

module.exports=router