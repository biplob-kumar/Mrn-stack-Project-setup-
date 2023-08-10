
const app = require('./app');
const port = 3000;

const mongoose= require("mongoose");

const ConnectDB= async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/curier")
        console.log("data base conetion successfull");
    } catch (err) {
        console.log("Databse connection " ,err);
    }
    }
    

ConnectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})