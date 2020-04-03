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
        const { name, nick, userLogin, number, password, id_times } = request.body;
        

        await connection('users').join('times', {'times.id': 'users.id_times'}).insert({
            name,
            nick,
            userLogin,
            password,
            number,
            id_times,
        })


        return response.json();
    },


};