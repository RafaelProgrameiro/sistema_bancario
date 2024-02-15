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
        
        const deleted_account = await pool.query(query, [client_id]);
        return deleted_account.rowCount;
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default deleteAccountService;