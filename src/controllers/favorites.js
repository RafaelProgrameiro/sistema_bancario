import { addFavoriteService, deleteFavoriteService, getAllFavoritesService, getFavoritedService } from '../service/favoritesService.js';
import inactivatedAccountService from '../service/inactivatedAccountService.js';

const getAllFavorites  = async (req, res) => {
    try {
        const {id: client_id} = req.client;

        const client_favorites = await getAllFavoritesService(client_id);
    
        return res.status(200).json(client_favorites);
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}

const addFavorites = async (req, res) => {
    const { id: client_id } = req.client;
    const favorited_client_id = req.body_client_id;

    if (client_id == favorited_client_id){
        return res.status(400).json({message: 'Não é possivel favoritar a própria conta.'});
    }
    try { 
        const existFavorited = await getFavoritedService(client_id, favorited_client_id);

        if(existFavorited != 0){
            return res.status(400).json({message: 'Conta já está favoritada.'});
        }

        const inactivated_account = await inactivatedAccountService(favorited_client_id);

        if(inactivated_account){
            return res.status(400).json({message: 'Conta precisa estar ativa para realizar ação.'});
        }
            
        await addFavoriteService(client_id, favorited_client_id);
    
        return res.status(204).send();
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

const deleteFavorites = async (req, res) => {
    const { id: client_id } = req.client; 
    const favorited_client_id = req.body_client_id;
    
    try {
        const favorite = await deleteFavoriteService(client_id, favorited_client_id);

        if(!favorite){
            return res.status(404).json({message: 'Não foi achado conta na lista de favoritos.'});
        }

        return res.status(204).send();
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export {getAllFavorites, addFavorites, deleteFavorites};