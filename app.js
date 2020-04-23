const express=require('express')
const app=express()
const session=require('express-session')

const port=3000

app.set('view engine','ejs')
app.use (express.urlencoded({extended:true}))

app.use(session({
    secret: 'treehouse loves you',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: false,
      maxAge:6e12
    }
  }))

const router=require('./routers')

app.use('/',router)


app.listen(port,function(){
    console.log(`Listening to port ${port}`)
})