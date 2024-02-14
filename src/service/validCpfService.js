import pool from '../dbConnection.js';

const validCpfService = async (client_cpf) => {
    try {
        const query = `
        SELECT
            client_cpf from clients
        WHERE
            client_cpf = $1`;
        
        const {rows : cpf} = await pool.query(query, [client_cpf]);
        
        return cpf[0];
    } catch (err) {
        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default validCpfService;