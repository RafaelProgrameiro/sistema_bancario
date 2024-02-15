import deleteAccountService from '../service/deleteAccountService.js';

const deleteAccount = async (req, res) => {
    const {id: client_id, client_balance} = req.client;    
    try {
        if(client_balance != 0){
            return res.status(400).json({message: 'Não é possível inativar conta com saldo.'});
        }               
        await deleteAccountService(client_id);
        
        return res.status(204).send();
    } catch (err) {           
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccount;
