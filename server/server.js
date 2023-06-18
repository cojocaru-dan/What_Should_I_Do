import mongoose from "mongoose";
import express from "express";
import { TodoModel } from "./model/Todo.js";

const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb+srv://dan_cojocaru_90233:cloudDatabase4@cluster0.klhzves.mongodb.net/?retryWrites=true&w=majority");

app.get('/api/todo', async (req, res) => {
    try {
        const allTodos = await TodoModel.find({});
        console.log("allTodos", allTodos);
        res.json({
            status: "ok",
            data: allTodos
        })
    } catch(error) {
        console.log(error);
    }
});

app.post('/api/todo', (req, res) => {
    console.log(req.body)

    const title = req.body.title;
    const comment = req.body.comment;
    const createdAt = req.body.createdAt;

    const todo = new TodoModel({
      title: title,
      comment: comment,
      createdAt: createdAt
    });

    todo.save()
      .then(todo => res.json(todo))
      .catch(err => res.status(400).json({ success: false }));
  });
  

app.listen(3001, () => console.log('Server started on port 3001', "http://localhost:3001"));
