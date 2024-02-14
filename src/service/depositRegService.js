import pool from '../dbConnection.js';

const depositRegService = async (
    depositing_client_account_number,
    depositing_client_id,
    receaving_client_account_number,
    receaving_client_id,
    amount
) =>{    
    try {
        const query = `
        INSERT INTO
            deposits (
                depositing_client_account_number,
                depositing_client_id,
                receaving_client_account_number,
                receaving_client_id,
                amount)
        VALUES
            ($1, $2, $3, $4, $5)`;

        await pool.query(query, [
            depositing_client_account_number,
            depositing_client_id,
            receaving_client_account_number,
            receaving_client_id,
            amount
        ]);

    } catch (err) {       
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}

export default depositRegService;