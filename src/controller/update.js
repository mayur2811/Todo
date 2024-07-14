
const Todo = require('../model/Todo');

const update = async (req, res) => {
    try {
        const {title, description } = req.body;
        const {id} = req.params;
        // update a todo using Mongoose model
        const updatedTodo = await Todo.findOneAndUpdate(
            {_id :id}  , // Find todo by id
            {title, description} , // Update fields
            { new: true } // Return updated todo
        );;
        //if not found updated 
        if(!updatedTodo){
            // Send a success response with the update todo
        res.status(201).json({
            success: true,
            data: updatedTodo,
            message: 'Todo updated successfully'
        }); 
        }

         // Send a success response with the updated todo
         res.status(200).json({
            success: true,
            data: updatedTodo,
            message: 'Todo updated successfully'
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

module.exports = update;