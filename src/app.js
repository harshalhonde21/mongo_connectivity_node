const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const templatepath = path.join(__dirname,'../templates')


app.use(express.json())
app.set("view engine","hbs")
app.set("views", templatepath)
app.use(express.urlencoded({extended:false}))

app.get("/", (req,res) =>{
    res.render("index")
})

app.post("/index",async(req,res)=>{
    const data ={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})