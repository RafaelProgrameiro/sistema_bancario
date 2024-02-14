import clientByAccountService from '../service/clientByAccountService.js';
import depositService from '../service/depositService.js';
import depositRegService from '../service/depositRegService.js';

const deposit = async (req, res) => {
    const { client_account_number, amount } = req.body;    

    try {
        const client = await clientByAccountService(client_account_number);
        
        if(!client){
            return res.status(400).json({message: 'Conta não encontrada'});            
        }

        const {id: client_id} = client;

        const deposit = await depositService(amount, client_id);

        if(deposit){
            await depositRegService(client_account_number, client_id, amount);
        }
        
        return res.status(204).send();
    } catch (err) { 
        console.log(err.message)       
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deposit;