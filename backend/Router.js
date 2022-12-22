const express = require('express')
const router = express.Router()
const todo = require("./model/schema")


router.get("/", async(req, res) => {
    todo.find((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data)
        }

    })
})
router.get("/:id", async(req, res) => {
    todo.findById(req.params.id,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data)
        }

    })
})
router.post("/",async(req,res)=>{
const todos=await new todo(req.body)
todos.save((err,data)=>{
if(err){
    console.log(err);
}
else{
    todos.save()
    res.json(data)
}
})
})

router.put("/:id",async(req,res)=>{
    const todos=await todo.findByIdAndUpdate( req.params.id)
   todos.todo=req.body.todo,
   todos.isComlete=req.body.isComlete
   
    todos.save()
    res.json(todos)
})

router.delete("/:id",(req,res)=>{
    todo.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json("Deleted successed")
        }
    })
})

module.exports=router