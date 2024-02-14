import pool from '../dbConnection.js';

const withdrawService = async (amount, client_id) => {
    try {
        console.log(amount, client_id)
        const query = `
            UPDATE
                clients
            SET
                client_balance = client_balance - $1
            WHERE
                id = $2
        `;
        await pool.query(query, [amount, client_id]);

        return true;
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default withdrawService;