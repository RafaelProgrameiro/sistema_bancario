import deleteAccountService from '../service/deleteAccountService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const deleteAccount = async (req, res) => {
    const {id: client_id} = req.client
    console.log(req.headers)
    try {

        const inactivated_account = await inactivatedAccountService(client_id);
        console.log(inactivated_account)
        if(inactivated_account > 0){
            return res.status(400).json({message: 'Conta já está inativada.'});
        }
        await deleteAccountService(client_id);      
        
        return res.status(204).send();
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccount;
