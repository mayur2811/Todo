const Todo = require('../model/Todo');

const getTodo = async (req, res) => {
    try {
        const { id } = req.params; // Assuming ID is sent as a route parameter

        const result = await Todo.findById(id);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found'
            });
        }

        res.status(200).json({
            success: true,
            data: result,
            message: 'Todo fetched successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: err.message
        });
    }
};

module.exports = getTodo;
