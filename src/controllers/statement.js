import {
    statementOutcomingDepositsService, statementIncomingDepositsService,
    statementWithdrawssService,
    statementOutcomingtransfersService,
    statementIncomingtransfersService } from '../service/statementService.js';

const statement = async (req, res) => {
    const {client_account_number, id: client_id, client_balance} = req.client;
    try {
        const statement = {
            client_account_number,
            client_balance
        };

        statement.outcoming_deposits =  await statementOutcomingDepositsService(client_id);

        statement.incoming_deposits = await statementIncomingDepositsService(client_id);

        statement.withdraws = await statementWithdrawssService(client_id);

        statement.outcoming_transfers = await statementOutcomingtransfersService(client_id);

        statement.incoming_transfers = await statementIncomingtransfersService(client_id);

        return res.status(200).json(statement);
    } catch (err) {
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }
    
}

export default statement;