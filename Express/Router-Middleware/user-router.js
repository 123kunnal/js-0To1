const express=require('express')
const router=express.Router()
router.use((req,res,next)=>{
     console.log(`UserRouter: ${req.method} ${req.url}`);
    next()
})

router.get('/profile',(req,res)=>{
    res.send("PRofile")
})
router.get('/home',(req,res)=>{
    res.send("home")
})
router.get('/catalog',(req,res)=>{
    res.send("catalog")
})
module.exports=router