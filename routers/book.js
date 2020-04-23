const router=require('express').Router()
const bookController=require('../controller/bookController')

// function chechkSession(req,res,next){
//     if(req.session.userId){
//         next()
//     }else {
//         res.send('Not Authorized')
//     }
// }

router.get('/',bookController.show)
router.get('/add',bookController.addForm)
router.post('/add', bookController.add)
router.get('/edit/:id',bookController.editForm)
router.post('/edit/:id', bookController.edit)
router.get('/delete/:id',bookController.delete)

module.exports=router