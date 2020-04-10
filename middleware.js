const express = require('express');
const route = express.Router();



route.get('/',(req,res)=>{
    res.send('  ');
});
route.use((req,res,next )=>{
    console.log('middeleware are used');
    next();
