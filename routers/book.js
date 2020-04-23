const router=require('express').Router()
const bookController=require('../controller/bookController')

function chechkSession(req,res,next){
    if(req.session.userId){
        next()
    }else {
        res.send('Not Authorized')
    }
}

router.get('/', chechkSession, bookController.show)

module.exports=router