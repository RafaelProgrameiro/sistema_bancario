const signIn = (req, res) => {
    const {nome_cliente, email_cliente, cpf_cliente, senha_cliente} = req.body
    
    
    //console.log(nome_cliente, email_cliente, cpf_cliente, senha_cliente)
    res.send('estou aqui')
}

export default signIn