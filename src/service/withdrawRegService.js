import pool from '../dbConnection.js';

const withdrawRegService = async (client_account_number, client_id, amount) => {
    try {
        const query = `
            INSERT INTO
                withdraws (client_account_number, client_id, amount)
            VALUES 
                ($1, $2, $3)`;
        await pool.query(query, [client_account_number, client_id, amount]);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default withdrawRegService;