import validCpfService from '../service/validCpfService.js';

const validCpf = async (req, res, next) =>{
    const {client_cpf} = req.body;

    try {
        const cpf = await validCpfService(client_cpf);     
        
        if (cpf){
            return res.status(400).json({message: 'Já existe um usuário cadastrado com este cpf.'});
        }
        next();
    } catch(err){
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
}

export default validCpf;