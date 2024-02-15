import pool from '../dbConnection.js';

const withdrawService = async (amount, client_id) => {
    try {        
        const query = `
            UPDATE
                clients
            SET
                client_balance = client_balance - $1
            WHERE
                id = $2
        `;
        const withdraw = await pool.query(query, [amount, client_id]);

        return withdraw.rowCount;
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default withdrawService;