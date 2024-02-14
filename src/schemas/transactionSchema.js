import joi from 'joi';

const transactionSchema = joi.object({
    client_account_number: joi.string().length(5).messages({
        'any.required': 'O campo número da conta é obrigatório',
        'string.empty': 'O campo número da conta é obrigatório',
        'string.length': 'O número da conta precisa ter 5 dígitos'
    }),
    amount: joi.number().integer().min(1).messages({
        'any.required': 'Valor transferido é obrigatório',
        'number.integer': 'Valor transferido precisa ser inteiro',
        'number.base': 'Valor transferido precisa ser um número',
        'number.min': 'Valor transferido deve ser maior que 0'
    })
});

export default transactionSchema;