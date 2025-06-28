const express=require('express')
const app=express()
app.get('/submit/:id',(req,res)=>{
    const id =req.params.id;
    if(id==='0'){
        const error=new Error('Invalid ID')
        return next(error)
    }
    res.send(id)
})
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('Something broke!');
})
app.listen(3000)