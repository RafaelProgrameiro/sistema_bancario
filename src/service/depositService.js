import pool from '../dbConnection.js';

const depositService = async (amount, client_id) => {
    
    try {
        const query = `
        UPDATE
            clients
        SET
           client_balance = client_balance + $1
        WHERE
            id = $2`;
    
        const deposit = await pool.query(query, [amount, client_id]);
        
        return deposit.rowCount;
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});  
    } 
    
};

export default depositService;