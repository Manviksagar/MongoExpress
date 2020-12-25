
const express = require("express")
const app = express()
const mongo = require("mongoose")
const url = 'mongodb://localhost/test'


mongo.connect(url, {useNewUrlParser:true})
const con = mongo.connection

con.on('open', ()=>{
    console.log("contected....")
})
app.use(express.json())

const sagroute = require("./routes/sagapi")
app.use("/v1", sagroute)

app.listen(4545,()=>{

    console.log("server started")
})