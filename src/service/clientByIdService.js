import pool from '../dbConnection.js';

const clientByIdService = async (client_id) => {
    
    try {
        const query = `
        SELECT
            * from clients
        WHERE
        id = $1`;
        const {rows: client} = await pool.query(query, [client_id]);        
        
        return client[0];
    } catch (err) {
       
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }   
}

export default clientByIdService;