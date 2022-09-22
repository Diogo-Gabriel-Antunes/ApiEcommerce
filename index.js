const express = require('express')
const rotas = require('./routes')
const cors = require('cors')
const bodyparser = require('body-parser')



const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    app.use(cors())
    
    next()
})

app.use(rotas)

app.listen(8080,()=> console.log("Ola"))