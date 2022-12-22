const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router =require('./Router')
const cors = require("cors")


app.use(cors())

app.use(express.json())

app.use("/todo",router)

app.get("/", (req, res) => {
    res.json("Welcom Home")
})

app.listen(8000, (err) => {
    if (!err) {
        console.log("Server Started ON 8000");
    }
    else {
        console.log(err);
        console.log("Emergency Alert.......,!");
    }
})

mongoose.connect("mongodb://0.0.0.0:27017/todoApp", (err) => {
    if (!err) {
        console.log("DB Connected Successfully....!");
    }
    else {
        console.log(err);
        console.log("Database Crashed...!");
    }
})