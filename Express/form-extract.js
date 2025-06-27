const express=require('express')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.post('/submit',(req,res)=>{
     const name=req.body.username;
     const usme=req.body.usme;
     res.send(`<h2>Hello, ${name}! ${usme}</h2>`);
})
app.listen(3000,()=>{
    console.log("Server Started")
})