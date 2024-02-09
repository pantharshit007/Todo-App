const express = require('express');
const app = express();
const cors = require('cors');
const {createTodo,updateTodo} = require('./types');
const { todo } = require('./db');

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid payload (Input)"
        })
        return
    }
    //add to mongo Db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg:"created Todo"
    })
})

app.get('/todos', async function(req, res) {
    const response = await todo.find({})
    res.json({
        Todos: response,
    })

})

app.put('/completed', async function(req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success){
        res.status(404).json({msg: "Error updating Todo"});
        return
    }

    await todo.updateOne({
        _id: updatePayload.id
    },{
        completed: true,
    })

    res.json({
        msg: 'Todo updated successfully',    
    })
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})