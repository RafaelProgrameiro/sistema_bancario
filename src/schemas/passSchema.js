import joi from 'joi';

const passSchema = joi.object({
    client_pass: joi.string().length(6).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.length': 'Senha precisa ter 6 dígitos'
    })
});

export default passSchema;