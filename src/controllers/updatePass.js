import { updatePassService } from '../service/updateService.js';
import bcrypt from 'bcrypt';

const updatePass = async (req, res) => {
    const {id: client_id} = req.client
    const {client_pass} = req.body
    
    try {
        const encryptedPass = await bcrypt.hash(client_pass, 10);
        await updatePassService(encryptedPass, client_id);

        return res.status(204).send();
    } catch (err) {
        
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }    
}

export default updatePass;