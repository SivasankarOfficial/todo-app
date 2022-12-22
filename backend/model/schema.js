
const mongoose = require('mongoose')

const TodoSchema =new mongoose.Schema({
    
    
        todo: String,
        isComplete: Boolean
    
})

module.exports = mongoose.model("todo", TodoSchema)