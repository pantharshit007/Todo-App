const z = require('zod');

const createTodo = z.object({
    title: z.string().min(3),
    description: z.string(3)
})

const updateTodo = z.object({
    id: z.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
}



/*
{
    title: string,
    desc: string,
}{
    id: string,
}
*/