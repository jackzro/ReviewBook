const router=require('express').Router()
const userController=require('../controller/userController')

function chechkSession(req,res,next){
    if(req.session.userId){
        next()
    }else {
        res.redirect('/')
    }
}

router.get('/', chechkSession, userController.show)
router.get('/seereview/:id', chechkSession, userController.seereview)
router.get('/seereview/:book/delete/:user', chechkSession, userController.delete)

module.exports=router