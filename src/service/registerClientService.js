import pool from '../dbConnection.js';

const registerClientService = async (client) => {
    const {client_name, client_email, client_cpf, encryptedPass, client_account_number} = client;
    try {
        const query = `
    INSERT INTO clients (
        client_name,
        client_email,
        client_cpf,
        client_pass,
        client_account_number)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING 
        client_account_number    
    `;

    const params = [client_name, client_email, client_cpf, encryptedPass, client_account_number];    

    const {rows: created_client_account_number} = await pool.query(query, params);
    
    return created_client_account_number[0];

    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
       
}

export default registerClientService;