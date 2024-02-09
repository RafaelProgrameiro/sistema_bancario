import { jwtKey } from '../../jwtKey.js';
import jwt from 'jsonwebtoken';

import clientByIdService from '../service/clientByIdService.js';

const authentication = async (req, res, next) => {
    const {authorization} = req.headers;
    
    if (!authorization) {
        return res.status(401).json({message: 'Necessário token de autenticação válido.'});
    }

    const token = authorization.split(' ')[1];
    
    try {
        if (!token){
            return res.status(401).json({message: 'Necessário token de autenticação válido.'});
        }
        const {id: client_id} =  jwt.verify(token, jwtKey);
        
        req.client = await clientByIdService(client_id);        
        if(!req.client){
            return res.status(400).json({message: 'Necessário realizar login para realizar ação.'});
        }
        next();

    } catch (err) {
        if(err.message === 'jwt malformed' || err.message === 'invalid signature'){
            return res.status(401).json({message: 'Necessário token de autenticação válido.'});
        }        
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
    
}
export default authentication;