const express = require('express')
const knex = require("knex")
const cors = require('cors')
const bodyparser = require('body-parser')
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const detect = require('./controllers/detect')

const db = knex({
	client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'sherlocked',
    database : 'smart-app-db'
}})



const app = express();

app.use(bodyparser.json())
app.use(cors())

app.get('/',(req,res)=>{res.send("hey")})
app.post('/register', (req,res) => {register.handleRegister(req,res,db,knex)})
app.post('/signin', (req,res)=>{signin.handleSignin(req,res,db)})
app.post('/detect',(req,res) => {detect.handleClarifai(req,res)})

app.listen(process.env.PORT || 3001,()=>{console.log("running on port")});
