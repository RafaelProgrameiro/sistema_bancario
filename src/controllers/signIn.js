import createAccountNumberByCpf from '../utils/createAccountNumberByCpf.js';

const signIn = (req, res) => {
    const {client_name, client_email, client_cpf, client_pass} = req.body

    client_account_number = createAccountNumberByCpf(client_cpf);

    


    return res.send('estou aqui')
}

export default signIn