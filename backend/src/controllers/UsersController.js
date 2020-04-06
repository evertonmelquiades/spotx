const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users')
            .select('*');

        return response.json(users);
    },

    async create(request, response) {

        const { nick } = request.body;
        const userCheck = await connection('users').where('nick', nick).select('nick').first();

        try {

            if(userCheck) {

                response.status(404).send({ error: "Nick Already Registered" });
            }

            const { name, nick, userLogin, number, password, id_times } = request.body;

            await connection('users').join('times').insert({
                name,
                nick,
                userLogin,
                password,
                number,
                id_times,
            });

            response.status(200).send("User Registred");
            //response.status(200).json({ nick }); Retorna o nick criado

        } catch (error) {

            response.status(500).send({ error: "Registration Failed" });
        }
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('users').where('id', id).delete();

        return response.status(204).send();
    }
};