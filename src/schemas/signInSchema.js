import joi from 'joi';
const signInSchema = joi.object({
    nome_cliente: joi.string().required().messages({
        'any.required': 'O nome é obrigatório',
        'string.empty': 'O nome é obrigatório'
    }),
    email_cliente: joi.string().email().required().messages({
        'string.email': 'Formato inválido de e-mail',
        'any.required': 'O e-mail é obrigatório',
        'string.empty': 'o e-mail é obrigatório'
    }),
    cpf_cliente: joi.string().pattern(/^[0-9]+$/).length(11).required().messages({
        'string.empty': 'O cpf é obrigatório',
        'any_required': 'o cpf é obrigatório',
        'string.pattern.base': 'Formato inválido de cpf',
        'string.length': 'Formato inválido de cpf'
    }),
    senha_cliente: joi.string().length(6).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.length': 'Formato inválido de senha'
    })
})

export default signInSchema