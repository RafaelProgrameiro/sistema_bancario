import pool from '../dbConnection.js';

const transferRegService = async (transfering_account_number,
    transfering_client_id,
    receaving_account_number,
    receaving_client_id,
    amount
) => {
    const query = `
        INSERT INTO
            transfers (
                transfering_account_number,
                transfering_client_id,
                receaving_account_number,
                receaving_client_id,
                amount)
        VALUES ($1, $2, $3, $4, $5)`;
    await pool.query(query, [
        transfering_account_number,
        transfering_client_id,
        receaving_account_number,
        receaving_client_id,
        amount
    ]);    
    try {
        
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default transferRegService;