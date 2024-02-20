import clientByIdService from '../service/clientByIdService.js';
import depositService from '../service/depositService.js';
import depositRegService from '../service/depositRegService.js';

const deposit = async (req, res) => {
    const { client_account_number: receaving_client_account_number, amount } = req.body;
    const receaving_client_id = req.body_client_id;
    const {id: depositing_client_id} = req.client;
    
    try {
        const deposit = await depositService(amount, receaving_client_id);

        if(!deposit){
            return res.status(404).json({message: 'Erro ao realizar transação.'});
        }
        
        const depositing_client =  await clientByIdService(depositing_client_id);
        const depositing_client_account_number = depositing_client.client_account_number;
        await depositRegService(
            depositing_client_account_number,
            depositing_client_id,
            receaving_client_account_number,
            receaving_client_id,
            amount
            );
                
        return res.status(204).send();
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deposit;