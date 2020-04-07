const schema = require("../Utils/schemaJoi");

const SignUp = async(request, response, next) => {

    const { name, nick, userLogin, password, number } = request.body;

    try {

        const { error } = await schema.signUp.validateAsync({

            name, nick, userLogin, password, number,
        });

        if(!error) { next(); }

        return response.status(400).json({ error }).send();

    } catch (error) {
        
        return response.status(500).json({ error }).send();
    }
}