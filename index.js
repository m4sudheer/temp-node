const express = require('express');
const app = express();

app.get('/test', (req,res)=>{
    console.log(req.query.hi)
    res.send(`hello ${req.query.hi}`)
})
app.listen(5000,()=>{
    console.log('hello world')
})