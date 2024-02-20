import pool from '../dbConnection.js';

const addFavoriteService = async (client_id, favorited_client_id) => {
    try {
        const query = `
        INSERT INTO
            favorites (client_id, favorited_client_id)
        VALUES
            ($1, $2)`;
        await pool.query(query, [client_id, favorited_client_id]);
        
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

const deleteFavoriteService = async (client_id, favorited_client_id) => {
    try {
        const query = `
        DELETE from
            favorites
        WHERE
            client_id = $1
        AND
            favorited_client_id = $2
        RETURNING
            favorite_id`;

        const favorite = await pool.query(query, [client_id, favorited_client_id]);
        
        return favorite.rowCount;
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

const getAllFavoritesService = async (client_id) => {
    try {
        const query = `
        SELECT
            f.favorited_client_id,
            c.client_name,
            c.client_account_number,
            c.client_email,
            c.client_cpf
        FROM favorites as f
        JOIN clients as c ON	   
            f.favorited_client_id = c.id
        WHERE	
            f.client_id = $1`;

        const clients_favorites = await pool.query(query, [client_id]);
        
        return clients_favorites.rows;
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

const getFavoritedService = async (client_id, favorited_client_id) => {
    try {
        const query = `
            SELECT
                favorite_id from favorites
            WHERE
                client_id = $1
            AND
                favorited_client_id = $2`;
        const {rowCount: existFavorited} = await pool.query(query, [client_id, favorited_client_id]);

        return existFavorited;
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}


export { addFavoriteService, deleteFavoriteService, getAllFavoritesService, getFavoritedService };