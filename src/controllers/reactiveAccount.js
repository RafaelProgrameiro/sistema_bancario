import inactivatedAccountService from '../service/inactivatedAccountService.js';
import reactiveAccountService from '../service/reactiveAccountService.js';

const reactiveAccount = async (req, res) => {
    const client_id = req.matched_client_id;

    try {        
        const inactivated_account = await inactivatedAccountService(client_id);   
             
        if(inactivated_account == 0){
            return res.status(400).json({message: 'Conta já está ativa.'});
        }

        await reactiveAccountService(client_id);        
        return res.status(201).send('Conta reativada com sucesso');        
        
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default reactiveAccount;