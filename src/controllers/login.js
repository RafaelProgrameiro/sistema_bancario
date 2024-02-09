import jwt from 'jsonwebtoken';
import { jwtKey } from '../../jwtKey.js';

const login = async (req, res) => {
    const client_id = req.client_id;
    
    const token = jwt.sign({id: client_id}, jwtKey, {expiresIn: '8h'});
    res.setHeader('Authorization', token);
    return res.status(200).send('Login efetuado com sucesso');
}

export default login;