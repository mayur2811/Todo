
const Todo = require('../model/Todo');

// Async function to handle POST request for creating a new todo
const create = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Create a new todo using Mongoose model
        const newTodo = await Todo.create({ title, description });

        // Send a success response with the newly created todo
        res.status(201).json({
            success: true,
            data: newTodo,
            message: 'Todo created successfully'
        });
    } catch (err) {
        console.error(err);
        // Handle error and send an error response
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: err.message
        });
    }
};

module.exports = create ;

