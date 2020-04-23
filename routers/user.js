const router=require('express').Router()
const userController=require('../controller/userController')

// function chechkSession(req,res,next){
//     if(req.session.userId){
//         next()
//     }else {
//         res.send('Not Authorized')
//     }
// }

router.get('/', userController.show)
router.get('/seereview/:id', userController.seereview)
router.get('/seereview/:book/delete/:user', userController.delete)

module.exports=router