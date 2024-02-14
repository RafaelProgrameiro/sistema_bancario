import clientByAccountService from '../service/clientByAccountService.js';
import clientByIdService from '../service/clientByIdService.js';
import depositService from '../service/depositService.js';
import depositRegService from '../service/depositRegService.js';

const deposit = async (req, res) => {
    const { receaving_client_account_number, amount } = req.body;
    const {id : depositing_client_id} = req.client
    
    try {
        const receaving_client = await clientByAccountService(receaving_client_account_number);
        
        if(!receaving_client){
            return res.status(400).json({message: 'Conta não encontrada'});            
        }

        const {id: receaving_client_id} = receaving_client;

        const deposit = await depositService(amount, receaving_client_id);
        
        if(deposit){
           const depositing_client =  await clientByIdService(depositing_client_id);
           const depositing_client_account_number = depositing_client.client_account_number;
            await depositRegService(
                depositing_client_account_number,
                depositing_client_id,
                receaving_client_account_number,
                receaving_client_id,
                amount
                );
        }
        
        return res.status(204).send();
    } catch (err) {                       
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deposit;