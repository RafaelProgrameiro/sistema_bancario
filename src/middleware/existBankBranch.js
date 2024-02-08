import existBankBranchService from '../service/existBankBranchService.js';

const existBankBranch = async (req, res, next) => {
    const {agencia_cliente} = req.body;

    try {
        const id_agencia = await existBankBranchService(agencia_cliente);     
        
        if (!id_agencia){
            return res.status(400).json({message: 'Não existe correspondente à informada.'});
        }
        req.id_agencia = id_agencia.id
        next();
    } catch(err){
        return res.status(500).json({mensagem: 'Erro inesperado do sistema.'});
    }
}

export default existBankBranch;
