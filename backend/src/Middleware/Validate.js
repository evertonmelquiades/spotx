const schema = require("../Utils/schemaJoi");

const signUp = async(request, response, next) => {

    const { name, nick, userLogin, password, number } = request.body;

    try {

        const { error } = await schema.validateAsync({

            name, nick, userLogin, password, number,
        });

        if(!error) { return next(); }

        return response.status(400).json({ error }).send();

    } catch (error) {
        
        return response.status(500).json({ error }).send();
    }
}

module.exports = signUp;