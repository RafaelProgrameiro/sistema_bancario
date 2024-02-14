import deleteAccountService from '../service/deleteAccountService.js';

const deleteAccount = async (req, res) => {
    const {id: client_id} = req.client
    try {
        if(!client_id){
            return res.status(401).json({message: 'Necessário token de autenticação válido.'})
        }
        await deleteAccountService(client_id);
        return res.status(204).send(); 
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccount;
