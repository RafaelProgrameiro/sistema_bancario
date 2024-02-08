const createAccountNumberByCpf = (client_cpf) => {
    let hash = 0
    for (let i = 0; i < client_cpf.length; i++){
        const char = client_cpf.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
    }
    let accountNumber = Math.abs(hash) % 100000;
    accountNumber = accountNumber.toString().padStart(5, '0');

    return accountNumber;
}

export default createAccountNumberByCpf;