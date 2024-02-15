import clientByAccountService from '../service/clientByAccountService.js';
import clientByIdService from '../service/clientByIdService.js';
import depositService from '../service/depositService.js';
import depositRegService from '../service/depositRegService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const deposit = async (req, res) => {
    const { client_account_number: receaving_client_account_number, amount } = req.body;
    const {id : depositing_client_id} = req.client
    
    try {
        const receaving_client = await clientByAccountService(receaving_client_account_number);
        
        if(!receaving_client){
            return res.status(400).json({message: 'Conta não encontrada'});            
        }

        const {client_pass: _, id: receaving_client_id} = receaving_client;

        const inactivated_account = await inactivatedAccountService(receaving_client_id);

        if(inactivated_account != 0){
            return res.status(400).json({message: 'Conta que irá receber o depósito precisa estar ativa para realizar ação.'});
        }

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