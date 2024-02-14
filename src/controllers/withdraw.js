import withdrawService from '../service/withdrawService.js';
import withdrawRegService from '../service/withdrawRegService.js';

const withdraw = async (req, res) => {
    const {client_account_number: withdraw_client_account_number, amount} = req.body;
    const {id: client_id, client_balance, client_account_number} = req.client;

    try {

        if(withdraw_client_account_number != client_account_number){
            return res.status(400).json({message: 'A conta informada não corresponde ao cliente registrado.'});
        }
        
        if(amount > client_balance){
            return res.status(400).json({message: 'Balanço insuficiente para operação.'});
        }

        const withdraw = await withdrawService(amount, client_id);

        if(withdraw){
            await withdrawRegService(client_account_number, client_id, amount);
        }
    
        return res.status(204).send();
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }

    
}

export default withdraw;