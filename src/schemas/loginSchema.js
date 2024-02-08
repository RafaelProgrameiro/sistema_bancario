import joi from 'joi';

const loginSchema = joi.object({
    client_account_number: joi.string().required().length(5).messages({
        'any.required': 'O campo número da conta é obrigatório',
        'string.empty': 'O campo número da conta é obrigatório',
        'string.length': 'O número da conta precisa ter 5 dígitos'
    }),
    client_pass: joi.string().length(6).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.length': 'Senha precisa ter 6 dígitos'
    })
});

export default loginSchema;