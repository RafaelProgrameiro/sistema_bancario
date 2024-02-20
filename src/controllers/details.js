import { getAllFavoritesService } from "../service/favoritesService.js";


export const details = async (req, res) => {
    const {id: client_id, client_name, client_email, client_cpf, client_account_number, client_balance} = req.client;
    
    try {
        const client_favorites = await getAllFavoritesService(client_id);
         
        const client = {
            client_name,
            client_email,
            client_account_number,
            client_cpf,
            client_balance,
            client_favorites
        }
        return res.status(200).json(client);
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}