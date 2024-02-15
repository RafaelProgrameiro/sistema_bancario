import pool from '../dbConnection.js';

const deleteAccountService = async (client_id) => {
    try {
        const query = `
            UPDATE
                clients
            SET
                client_activated = FALSE
            WHERE
                id = $1
        `;
        
        await pool.query(query, [client_id]);
        
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccountService;