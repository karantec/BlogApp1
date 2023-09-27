const express=require('express')
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const PORT=8000;
require('dotenv').config();

require('./db');
app.use(bodyparser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.json({message:"hello from server"});
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);

})