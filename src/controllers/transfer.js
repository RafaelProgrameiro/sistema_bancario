import withdrawService from '../service/withdrawService.js';
import depositService from '../service/depositService.js';
import transferRegService from '../service/transferRegService.js';

const transfer = async (req, res) => {
    const {client_account_number: transfering_account_number, id: transfering_client_id, client_balance } = req.client; 
    const {client_account_number: receaving_account_number, amount} = req.body;
    const receaving_client_id = req.client_id;

    if(transfering_account_number == receaving_account_number){
        return res.status(400).json({message: 'Não é possível realizar transferência para a mesma conta.'});
    }

    if(amount > client_balance){
        return res.status(400).json({message: 'Balanço insuficiente para operação.'});        
    }

    try {
        const withdraw = await withdrawService(amount, transfering_client_id);
        const deposit = await depositService(amount, receaving_client_id);

        if(!deposit || !withdraw){
            return res.status(404).json({message: 'Erro ao realizar transação.'});
        }

        await transferRegService(transfering_account_number, transfering_client_id, receaving_account_number, receaving_client_id, amount);               

        return res.status(204).send();
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
};

export default transfer;