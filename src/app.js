const fs = require('fs')
const chalk = require('chalk')
const path = require ('path')
const express = require('express')
const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=> res.render('index',{title:'index'}))

app.listen(3000,()=>{ console.log(chalk.blue('PS PRoject Running on port 3000'))})