-- banco de dados
CREATE DATABASE sistema_bancario

-- tabela clientes
CREATE TABLE clients (
    id serial primary key,
    client_name varchar(120) not null,
    client_email varchar(120) not null,
    client_cpf char(11) not null unique,
    client_pass varchar(100) not null,
    client_account_number char(5) not null unique,
    client_balance int DEFAULT 0
);

-- tabela depositos
CREATE TABLE deposits (
    id serial primary key,
    client_account_number int not null,
    id_client int REFERENCES clients(id) not null,
    amount int check (amount >= 0) not null, 
    deposit_date  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- tabela saques
CREATE TABLE withdraws (
    id serial primary key,
    client_account_number int not null,
    id_client int REFERENCES clients(id) not null,
    amount int CHECK (amount >= 0) not null, 
    withdraw_date  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- tabela transferencias
CREATE TABLE transfers (
    id serial primary key,
    transfering_account_number int not null,
    transfering_client_id int REFERENCES clients(id) not null,
    receaving_account_number int check (receaving_account_number != transfering_account_number) not null,
    receaving_client_id int REFERENCES clients(id) not null,
    amount int check (amount >= 0) not null,
    transfer_date  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);