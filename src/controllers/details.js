import inactivatedAccountService from '../service/inactivatedAccountService.js';

export const details = async (req, res) => {
    const {id: client_id, client_name, client_email, client_cpf, client_account_number, client_balance} = req.client;
    
    try {
        const inactivated_account = await inactivatedAccountService(client_id);
        
        if(inactivated_account != 0){
            return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
        }
        const client = {
            client_name,
            client_email,
            client_account_number,
            client_cpf,
            client_balance
        }
        return res.status(200).json(client);
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}