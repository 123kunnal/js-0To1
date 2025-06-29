const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("Gi")
})
app.post('/p',(req,res)=>{
    res.send("Po");
})
app.listen(3000)