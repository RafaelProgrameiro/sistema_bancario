import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

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
        const {id: client_id} =  jwt.verify(token, process.env.JWT_KEY);
        
        req.client = await clientByIdService(client_id);        
        if(!req.client){
            return res.status(400).json({message: 'Necessário realizar login para realizar ação.'});
        }
        next();

    } catch (err) {
        if(err.message === 'jwt malformed' || err.message === 'invalid signature' || err.message === 'jwt expired'){
            return res.status(401).json({message: 'Necessário token de autenticação válido.'});
        }               
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}
export default authentication;