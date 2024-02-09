import pool from '../dbConnection.js';

const clientByIdService = async (client_id) => {
    
    try {
        const query = `Select * from clients where id = $1`;
        const {rows: client} = await pool.query(query, [client_id]);
        
        console.log(client[0])
        return client[0];
    } catch (err) {
       
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }   
}

export default clientByIdService;