const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const mysql = require('mysql')
const dotenv = require ('dotenv')

dotenv.config({path: './.env'})

const app = express();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user:process.env.DATABASE_USHER,
  password:process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
connection.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!:)');
    }
  });  
 module.exports = connection; 

const users =[]

 app.set('view-engine','ejs')
    app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {name:'kyle'})     
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',(req, res)=>{

})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})


app.post('/register',async (req, res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)  
        users.push({
            id:Date.now().toString(),
            name: req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
      } catch{
          res.redirect('/register')
      }
      console.log(users)
})
app.listen(3000)