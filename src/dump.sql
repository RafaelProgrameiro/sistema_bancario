-- banco de dados
CREATE DATABASE sistema_bancario

-- tabela agencias
CREATE TABLE agencias (
    id serial primary key,
    nome varchar(120) not null,
    numero int not null unique
);

-- inserir dados na tabela agencias
INSERT INTO agencias (nome, numero) VALUES ('Agência A', 101), ('Agência B', 102), ('Agência C', 103);

-- tabela clientes
CREATE TABLE clientes (
    id serial primary key,
    nome_cliente varchar(120) not null,
    email_cliente varchar(120) not null,
    cpf_cliente char(11) not null unique,
    senha_cliente varchar(20) not null,
    numero_conta_cliente int not null unique,
    agencia_cliente int REFERENCES agencias(id),
    saldo_cliente int DEFAULT 0
);

-- tabela depositos
CREATE TABLE depositos (
    id serial primary key,
    cliente int REFERENCES clientes(id) not null,
    valor int check (valor >= 0) not null, 
    data_deposito  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- tabela saques
CREATE TABLE saques (
    id serial primary key,
    cliente int REFERENCES clientes(id) not null,
    valor int check (valor >= 0) not null, 
    data_saque  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- tabela transferencias
CREATE TABLE transferencias (
    id serial primary key,
    cliente_transferindo int REFERENCES clientes(id) not null,
    cliente_recebendo int REFERENCES clientes(id) check (cliente_recebendo != cliente_transferindo) not null,
    valor int check (valor >= 0) not null, 
    data_transferencia  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);