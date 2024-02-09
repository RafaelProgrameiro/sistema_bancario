import joi from 'joi';

const emailSchema = joi.object({
    client_email: joi.string().email().required().messages({
        'string.email': 'Formato inválido de e-mail',
        'any.required': 'O e-mail é obrigatório',
        'string.empty': 'o e-mail é obrigatório'
    })
});

export default emailSchema;