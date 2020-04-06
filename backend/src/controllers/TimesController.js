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
    },
    async delete(request, response) {
        const { id } = request.params;
        const password = request.headers.authorization;

        const user = await connection('times')
        .where('id', id)
        .select('password')
        .first();

        if (user.password !== password) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('times').where('id', id).delete();

        return response.status(204).send();
    
    },
      async update(request, response) {
          const { id } = request.params;
          const { name, description, password } = request.body;

          await connection('times')
          .where('id', id, 'name', name, 'description', description, 'password', password)
          .update('name', 'description', 'password').returning('*');

          return response.status(200).send();;
     }   
};