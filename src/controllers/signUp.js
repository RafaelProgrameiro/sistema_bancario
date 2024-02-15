import createAccountNumberByCpf from '../utils/createAccountNumberByCpf.js';
import bcrypt from 'bcrypt';
import registerClientService from '../service/registerClientService.js';

const signUp = async (req, res) => {
    const {client_name, client_email, client_cpf, client_pass} = req.body

    const client_account_number = createAccountNumberByCpf(client_cpf);    

    try {
        const encryptedPass = await bcrypt.hash(client_pass, 10);
        const client = {
            client_name,
            client_email,
            client_cpf,
            client_account_number,
            encryptedPass
        }
        const created_client_account_number = await registerClientService(client);        

    } catch (err) {
        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }

    return res.status(201).json(created_client_account_number);
}

export default signUp;