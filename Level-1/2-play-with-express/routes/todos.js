const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/todos_db?retryWrites=true&w=majority";

const client = new MongoClient(uri);

router
    .param(":id", (req, res, next) => {
        let { id } = req.params
        req.todoId = parseInt(id)
        next()
    })
    .get("/", async (req, res, next) => {
        try {
            await client.connect();
            const database = client.db('todos_db');
            const todos = database.collection('todos');
            const cursor = todos.find({})
            let result = []
            if ((await cursor.count()) === 0) {
                console.log("No documents found!");
            } else {
                await cursor.forEach(todo => {
                    result.push(todo)
                });
            }
            res.status(200).json(result)
            // res.render('todos-view', { todos: result })
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }

    })
    .post("/", bodyParser.json(), async (req, res, next) => {
        let body = req.body;
        try {
            await client.connect();
            const database = client.db('todos_db');
            const todos = database.collection('todos');
            const result = await todos.insertOne(body)
            res.status(201).json(result)
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    })
    .get("/:id", (req, res, next) => {
        // TODO
    })
    .delete("/:id", (req, res, next) => {
        // TODO
    })


module.exports = router;