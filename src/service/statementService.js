import pool from '../dbConnection.js';

const statementOutcomingDepositsService = async (client_id) => {

    try {
        const query = `
            SELECT
                depositing_client_account_number, receaving_client_account_number, amount, transaction_date
            FROM
                deposits
            WHERE
                depositing_client_id = $1
            AND
                depositing_client_account_number != receaving_client_account_number
            ORDER BY
                transaction_date ASC`;
        const { rows: outcoming_deposits } = await pool.query(query, [client_id]);
    
    return outcoming_deposits;
        
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
};

const statementIncomingDepositsService = async (client_id) => {

    try {
        const query = `
            SELECT
                depositing_client_account_number, receaving_client_account_number, amount, transaction_date
            FROM
                deposits
            WHERE
                receaving_client_id = $1             
            ORDER BY
                transaction_date ASC`;
        const { rows: incoming_deposits } = await pool.query(query, [client_id]);
    
    return incoming_deposits;
        
    } catch (err) {        
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
};

const statementWithdrawssService = async (client_id) => {

    try {
        const query = `
            SELECT
                client_account_number, amount, transaction_date
            FROM
                withdraws
            WHERE
                client_id = $1
            ORDER BY
                transaction_date ASC`;
        const { rows: withdraws } = await pool.query(query, [client_id]);
    
    return withdraws;
        
    } catch (err) {               
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
};

const statementOutcomingTransfersService = async (client_id) => {

    try {
        const query = `
            SELECT
                transfering_account_number, receaving_account_number, amount, transaction_date
            FROM
                transfers
            WHERE
                transfering_client_id = $1
            ORDER BY
                transaction_date ASC`;
        const { rows: outcoming_transfers } = await pool.query(query, [client_id]);
    
    return outcoming_transfers;
        
    } catch (err) {               
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
};

const statementIncomingTransfersService = async (client_id) => {

    try {
        const query = `
            SELECT
                transfering_account_number, receaving_account_number, amount, transaction_date
            FROM
                transfers
            WHERE
                receaving_client_id = $1
            ORDER BY
                transaction_date ASC`;
        const { rows: incoming_transfers } = await pool.query(query, [client_id]);
    
    return incoming_transfers;
        
    } catch (err) {               
        return res.status(500).json({message: 'Erro inesperado do sistema.'});
    }    
};

export {
    statementOutcomingDepositsService, statementIncomingDepositsService,
    statementWithdrawssService,
    statementOutcomingTransfersService,
    statementIncomingTransfersService };