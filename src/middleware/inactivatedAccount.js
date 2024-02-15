import inactivatedAccountService from '../service/inactivatedAccountService.js';

const inactivatedAccount = async (req, res, next) => {
    const client_id = req.client_id;
    try {        
        const inactivated_account = await inactivatedAccountService(client_id);        
        if(inactivated_account > 0){
            return res.status(400).json({message: 'Necessário reativar conta para acessá-la'});
        }
        next();
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default inactivatedAccount;