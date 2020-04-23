const router=require('express').Router()
const homeController=require('../controller/homeController')
const userRouter=require('./user')
const bookRouter=require('./book')


router.get('/',homeController.home)
router.get('/register',homeController.register)
router.post('/register',homeController.registerPost)
router.get('/login',homeController.login)
router.post('/login',homeController.loginPost)


router.use('/user',userRouter)
router.use('/book',bookRouter)

module.exports=router