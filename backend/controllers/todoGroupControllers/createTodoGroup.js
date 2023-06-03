const TodoGroup = require('../../models/TodoGroup');

// Create a todo group
const createTodoGroup = async (req, res) => {

    const { name } = req.body;
    console.log(req.body);
    const userId = req.params;
    
    try {
        // check if the group already exists
        const existingTodoGroup = await TodoGroup.findOne({ where: { userId, name } });
        if (existingTodoGroup) {
            return res.status(400).json({ message: 'Todo Group already exists' })
        }

        // create the todoGroup
        const todoGroup = await TodoGroup.create({ name, userId });
        res.status(201).json(todoGroup);
    
    } 
    
    catch (error) {
        console.error(error);
        throw new Error('Failed to create todo group');
    }
}

module.exports = {
    createTodoGroup
}