const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/dbms_project_update")
.then(()=>{
    console.log("connect")
}).catch(() =>{
    console.log("not connect")
})

const LogSchema = new mongoose.Schema({
    name:{
        type:"String",
        require:true
    },
    password:{
        type:Number,
        require:true
    }
})

const collection = new mongoose.model("Harshal", LogSchema)
module.exports = collection