import { updatePassService } from '../service/updateService.js';

const updatePass = async (req, res) => {
    const {id: client_id} = req.client
    const {client_pass} = req.body
    
    try {
        
        await updatePassService(client_pass, client_id);

        return res.status(204).send();
    } catch (err) {
        
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }    
}

export default updatePass;