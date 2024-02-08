import pool from '../dbConnection.js';

const existBankBranchService = async (agencia_cliente) =>{
    try {
        const query = `
        SELECT
            id from agencias
        WHERE
            numero = $1`;
        
        const {rows : id_agencia} = await pool.query(query, [agencia_cliente])
        
        return id_agencia[0];
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
}

export default existBankBranchService;