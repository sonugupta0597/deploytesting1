const express = require("express");

const app = express();

app.listen(3000)

app.get("/",(req,res)=>{

    console.log("Home Page")

    res.send({
        name:"Sonu Gupta"
    })
})

console.log("server started");