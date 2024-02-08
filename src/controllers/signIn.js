const signIn = (req, res) => {
    const {nome_cliente, email_cliente, cpf_cliente, senha_cliente} = req.body
    const id_agencia = req.id_agencia
    
    
    console.log(nome_cliente, email_cliente, cpf_cliente, senha_cliente, id_agencia)
    return res.send('estou aqui')
}

export default signIn