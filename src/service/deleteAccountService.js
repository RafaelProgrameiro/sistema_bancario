import pool from '../dbConnection.js';

const deleteAccountService = async (client_id) => {
    try {
        const query = `
        DELETE
            from clients
        WHERE
            id = $1`;
        
        await pool.query(query, [client_id]);
    } catch (err) {
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccountService;