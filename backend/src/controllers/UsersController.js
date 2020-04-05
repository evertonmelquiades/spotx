const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users')
            .join('times',
                'users.id',
                'times.id')
            .select('users.name as usuário',
                'users.nick as nick',
                'users.userLogin as login',
                'users.password as senha',
                'users.number as número',
                'times.name as time');

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

            await connection('users').join('times', {'times.id': 'users.id_times'}).insert({
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
    }
};