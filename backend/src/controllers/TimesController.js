const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const times = await connection('times').select('*');

        return response.json(times);
    },
    async create(request, response) {
        const { name, description, password } = request.body;

        await connection('times').insert({
            name,
            description,
            password

        })

        return response.json();
    }
};