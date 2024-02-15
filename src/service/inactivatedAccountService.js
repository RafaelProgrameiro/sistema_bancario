import pool from '../dbConnection.js';

const inactivatedAccountService = async (client_id) => {
    try {
        const query = `
        SELECT
            client_activated
        FROM
            clients
        WHERE
            client_activated = FALSE
        AND
            id = $1`;

    const {rowCount: inactivated_account} = await pool.query(query, [client_id]);
    
    return inactivated_account;

    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default inactivatedAccountService;

