
const mongoose= require("mongoose")
const ConnectDB= async()=>{
try {
    await mongoose.connect("")
    console.log("data base conetion successfull");
} catch (err) {
    console.log("Databse connection " ,err);
}
}

exports.module = ConnectDB;