import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './Models/Todo.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  // const todo = new Todo({
  //   title: "hey Vineet",
  //   des: "this is discription of todo",
  //   isDone: false
  // })
  // todo.save();
  res.send('Hello World!!!!');
})

app.post('/user', async (req, res) => {
  console.log(req.body)
  for (let i = 0; i < req.body.length; i++) {
    const element = req.body[i];
    const username = element.username;
    const password = element.password;
  
    //  creating field in database
    await Todo.create({
      username,
      password
    })
  
    return res.send("created");
    // await Todo.create({
    //   username,
    //   password
    // })
  }
})

app.put('/update',async(req,res)=>{
  const filter={username:req.body.username}
  const update={password:req.body.password}
  await Todo.findOneAndUpdate(filter,update)
  res.json({
      msg:"updated"
  })
})

app.delete('/delete', async (req, res) => {
  const filter = { username: req.body.username };
  await Todo.findOneAndDelete(filter);
  res.json({
    msg: 'Deleted'
  });
});

app.listen(port, async  () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/todo");
  console.log(`Example app listening on port ${port}`);
})