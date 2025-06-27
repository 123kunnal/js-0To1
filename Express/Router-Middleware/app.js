const express=require('express')
const app=express()
const UserRouter=require('./user-router')
app.use('/user',UserRouter)
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});