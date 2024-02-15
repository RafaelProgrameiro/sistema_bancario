import deleteAccountService from '../service/deleteAccountService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const deleteAccount = async (req, res) => {
    const {id: client_id} = req.client
    try {

        const inactivated_account = await inactivatedAccountService(client_id);
        
        if(inactivated_account){
            return res.status(400).json({message: 'Conta já está inativada.'});
        }
        await deleteAccountService(client_id);        
        
        res.setHeader('Authorization', '');
        return res.status(204).send(); 
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccount;
