const express =require("express")
const cors=require("cors")

const app=express();

app.use(cors());

//  parser 
app.use(express.json())
//  helth route
app.get('/helth',(req,res)=>{
    res.statusCode(200).json({status:"success"})
})

module.exports=app;

