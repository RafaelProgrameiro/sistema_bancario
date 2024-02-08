import pool from "../dbConnection.js";

const validCpfService = async (cpf_cliente) => {
    try {
        const query = `
        SELECT
            cpf_cliente from clientes
        WHERE
            cpf_cliente = $1`;
        
        const {rows : cpf} = await pool.query(query, [cpf_cliente])
        
        return cpf;
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
}

export default validCpfService;