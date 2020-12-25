const express = require("express")
const route = express.Router()

const sagmod = require("../models/sagmodel")

route.get("/", async (req, res)=>

{
    const sagar = await sagmod.find()
    res.json(sagar)
})

route.post("/post", async (req, res)=>
{

    const ss = new sagmod({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    const sagar = await ss.save()
    res.json(sagar)
})



module.exports=route