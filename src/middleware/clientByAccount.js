import clientByAccountService from '../service/clientByAccountService.js';

import bcrypt from 'bcrypt';

const clientByAccount = async (req, res, next) => {
    const {client_account_number, client_pass} = req.body;

    try {
        const client = await clientByAccountService(client_account_number);

        if(!client){
            return res.status(400).json({message: 'Usuário e/ou senha inválido(s).'});
        }

        const validPass = await bcrypt.compare(client_pass, client.client_pass)

        if(!validPass){
            return res.status(400).json({message: 'Usuário e/ou senha inválido(s).'});
        }
        req.client_id = client.id
        next();
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}    

export default clientByAccount;