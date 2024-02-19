import clientByAccountService from "../service/clientByAccountService.js";
import inactivatedAccountService from "../service/inactivatedAccountService.js";

const existBodyAccount = async (req, res, next) =>{
    const { client_account_number } =  req.body;
    try {            
        const client = await clientByAccountService(client_account_number);
        
        if(!client){
            return res.status(400).json({message: 'Conta não encontrada'});            
        }

        const {client_pass: _, id: client_id} = client;

        const inactivated_account = await inactivatedAccountService(client_id);

        if(inactivated_account != 0){
            switch (req.path) {
                case '/deposit':
                    return res.status(400).json({message: 'Conta que receberá depósito precisa estar ativa para realizar ação.'});
                case '/transfer':
                    return res.status(400).json({message: 'Conta que receberá transferência precisa estar ativa para realizar ação.'});               
                case '/addFavorites':
                        return res.status(400).json({message: 'Conta precisa estar ativa para ser favoritada.'});
                default:
                    return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
            }           
        }

        req.client_id = client_id;

        next();
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default existBodyAccount;

