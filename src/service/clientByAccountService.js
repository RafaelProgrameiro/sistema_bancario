import pool from '../dbConnection.js';

const clientByAccountService = async (client_account_number) => {
    try {
        const query = `
        SELECT
            id, client_pass from clients
        WHERE
            client_account_number = $1`;

        const {rows : client} = await pool.query(query, [client_account_number]);
        
        return client[0];
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default clientByAccountService;