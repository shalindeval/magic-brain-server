const express = require('express')
const knex = require("knex")
const cors = require('cors')
const bodyparser = require('body-parser')
const register = require('./Controllers/register')
const signin = require('./Controllers/signin')
const detect = require('./Controllers/detect')

const db = knex({
	client: 'pg',
  connection: {
    connectionString :process.env.DATABASE_URL,
    ssl: true
}})



const app = express();

app.use(bodyparser.json())
app.use(cors())

app.get('/',(req,res)=>{res.send("hey")})
app.post('/register', (req,res) => {register.handleRegister(req,res,db,knex)})
app.post('/signin', (req,res)=>{signin.handleSignin(req,res,db)})
app.post('/detect',(req,res) => {detect.handleClarifai(req,res)})

app.listen(process.env.PORT || 3001,()=>{console.log("running on port")});
