export const details = (req, res) => {
    const {client_name, client_email, client_cpf, client_account_number, client_balance} = req.client;

    const client = {
        client_name,
        client_email,
        client_account_number,
        client_cpf,
        client_balance
    }
    return res.status(200).json(client);
}