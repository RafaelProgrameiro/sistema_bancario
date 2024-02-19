import convertToBrazilFormatDate from '../utils/convertToBrazilFormatDate.js';

import {
    statementOutcomingDepositsService, statementIncomingDepositsService,
    statementWithdrawssService,
    statementOutcomingTransfersService,
    statementIncomingTransfersService } from '../service/statementService.js';

const statement = async (req, res) => {
    const {client_account_number, id: client_id, client_balance} = req.client;
    try {
        let statement = {
            client_account_number,
            client_balance
        };

        statement.outcoming_deposits =  await statementOutcomingDepositsService(client_id);        

        statement.incoming_deposits = await statementIncomingDepositsService(client_id);        

        statement.withdraws = await statementWithdrawssService(client_id);
        
        statement.outcoming_transfers = await statementOutcomingTransfersService(client_id);              

        statement.incoming_transfers = await statementIncomingTransfersService(client_id);       

        statement = convertToBrazilFormatDate(statement);

        return res.status(200).json(statement);
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
}

export default statement;