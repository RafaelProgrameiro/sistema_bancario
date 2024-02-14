import pool from '../dbConnection.js';

const depositRegService = async (client_account_number, id_client, amount) =>{
    
    try {
        const query = `
        INSERT INTO
            deposits (client_account_number, id_client, amount)
        VALUES
            ($1, $2, $3)`;

        await pool.query(query, [client_account_number, id_client, amount]);

    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}

export default depositRegService;