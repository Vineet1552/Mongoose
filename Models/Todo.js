import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export const Todo = mongoose.model('Todo', TodoSchema);