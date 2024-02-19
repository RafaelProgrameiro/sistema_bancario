import joi from 'joi';

const accountSchema = joi.object({
    client_account_number: joi.string().required().length(5).messages({
        'any.required': 'O campo número da conta é obrigatório',
        'string.empty': 'O campo número da conta é obrigatório',
        'string.length': 'O número da conta precisa ter 5 dígitos'
    })
});

export default accountSchema;