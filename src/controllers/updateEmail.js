import { updateEmailService } from '../service/updateService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const updateEmail = async (req, res) => {
    const {id: client_id} = req.client
    const {client_email} = req.body
    try {
        const inactivated_account = await inactivatedAccountService(client_id);
        
        if(inactivated_account != 0){
            return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
        }
        await updateEmailService(client_email, client_id);

        res.status(204).send();
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default updateEmail;