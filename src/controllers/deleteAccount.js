import deleteAccountService from '../service/deleteAccountService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const deleteAccount = async (req, res) => {
    const {id: client_id} = req.client;    
    try {               
        await deleteAccountService(client_id);
        
        return res.status(204).send();
    } catch (err) {           
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccount;
