import validCpfService from "../service/validCpfService.js";

const validCpf = async (req, res, next) =>{
    const {cpf_cliente} = req.body;

    try {
        const cpf = await validCpfService(cpf_cliente);     
        
        if (cpf.length > 0){
            return res.status(400).json({message: 'Já existe um usuário cadastrado com este cpf.'});
        }
        next();
    } catch(err){
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
}

export default validCpf;