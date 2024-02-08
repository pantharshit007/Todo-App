const mongoose = require("mongoose");
const {KEY} = require("./config");

mongoose.connect(KEY);

// Setup connection event listeners
mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Connection error:', err);
});

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('Todo', todoSchema);

module.exports={
    todo,
}

