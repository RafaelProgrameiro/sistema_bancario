import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import inactivatedAccountService from '../service/inactivatedAccountService.js';

const login = async (req, res) => {
    const client_id = req.client_id;

    try {        
        const inactivated_account = await inactivatedAccountService(client_id);        
        if(inactivated_account != 0){
            return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
        }
        const token = jwt.sign({id: client_id}, process.env.JWT_KEY, {expiresIn: '8h'});
        res.setHeader('Authorization', token);
        return res.status(200).send('Login efetuado com sucesso');        
        
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default login;