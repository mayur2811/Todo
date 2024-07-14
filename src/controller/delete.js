const Todo = require('../model/Todo');

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // delete todo using Mongoose model
        const response = await Todo.deleteOne({ id });

         
        if (!response) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found'
            });
        }

        // Send a success response with the delete todo
        res.status(201).json({
            success: true,
            data: response,
            message: 'Todo deleted successfully'
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

module.exports = deleteTodo;