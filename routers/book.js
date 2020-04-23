const router=require('express').Router()
const bookController=require('../controller/bookController')

function chechkSession(req,res,next){
    if(req.session.userId){
        next()
    }else {
        res.redirect('/')
    }
}

router.get('/',chechkSession, bookController.show)
router.get('/add',chechkSession,bookController.addForm)
router.post('/add', chechkSession,bookController.add)
router.get('/edit/:id',chechkSession,bookController.editForm)
router.post('/edit/:id',chechkSession, bookController.edit)
router.get('/delete/:id',chechkSession,bookController.delete)
router.get('/review/:id',chechkSession,bookController.addreview)
router.post('/review/:id',chechkSession,bookController.reviewPost)

module.exports=router