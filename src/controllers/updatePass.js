import { updatePassService } from '../service/updateService.js';
import bcrypt from 'bcrypt';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const updatePass = async (req, res) => {
    const {id: client_id} = req.client
    const {client_pass} = req.body
    
    try {
        const inactivated_account = await inactivatedAccountService(client_id);
        
        if(inactivated_account != 0){
            return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
        }
        const encryptedPass = await bcrypt.hash(client_pass, 10);
        await updatePassService(encryptedPass, client_id);

        return res.status(204).send();
    } catch (err) {
        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default updatePass;