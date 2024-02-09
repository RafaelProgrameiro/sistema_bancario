import pool from '../dbConnection.js';

const updateEmailService = async (client_email, client_id) => {
    try {
        const query = `update clients set client_email = $1 where id = $2`;
        await pool.query(query, [client_email, client_id]); 
    } catch (err) {
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }    
}

const updatePassService = async (client_pass, client_id) => {
    try {
        const query = `update clients set client_email = $1 where id = $2`;
        await pool.query(query, [client_pass, client_id]);
    } catch (err) {
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }    
}

export {updateEmailService, updatePassService};