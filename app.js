const express=require('express')
const app=express()
const session=require('express-session')

const port=3000

app.set('view engine','ejs')
app.use (express.urlencoded({extended:true}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

const router=require('./routers')

app.use('/',router)


app.listen(port,function(){
    console.log(`Listening to port ${port}`)
})