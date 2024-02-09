import { updateEmailService } from '../service/updateService.js';

const updateEmail = async (req, res) => {
    const {id: client_id} = req.client
    const {client_email} = req.body
    try {
        await updateEmailService(client_email, client_id);

        res.status(204).send();
    } catch (err) {
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }    
}

export default updateEmail;