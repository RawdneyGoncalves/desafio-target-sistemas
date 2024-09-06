-- Criação das tabelas necessarias:
CREATE TABLE Estado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sigla VARCHAR(2) NOT NULL
);

CREATE TABLE TipoTelefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL
);

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(100) NOT NULL,
    estado_id INT,
    FOREIGN KEY (estado_id) REFERENCES Estado(id)
);

CREATE TABLE Telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(15) NOT NULL,
    tipo_id INT,
    cliente_id INT,
    FOREIGN KEY (tipo_id) REFERENCES TipoTelefone(id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Consulta para trazer clientes de São Paulo com seus telefones :
SELECT c.id, c.razao_social, t.numero
FROM Cliente c
JOIN Telefone t ON c.id = t.cliente_id
JOIN Estado e ON c.estado_id = e.id
WHERE e.sigla = 'SP';


-- Explicação dos Resultados

-- Estado: Contém informações sobre os estados, incluindo um identificador único (id) e a sigla do estado (sigla).

-- TipoTelefone: Armazena diferentes tipos de telefone (por exemplo, comercial, residencial, celular), com um identificador único (id) e a descrição do tipo (descricao).

-- Cliente: Guarda os dados dos clientes, com um identificador único (id), o nome da razão social (razao_social), e um campo de referência para o estado (estado_id), que é uma chave estrangeira para a tabela Estado.

-- Telefone: Contém informações sobre os números de telefone dos clientes, com um identificador único (id), o número do telefone (numero), um tipo de telefone (tipo_id), e um campo de referência para o cliente (cliente_id), que é uma chave estrangeira para a tabela Cliente.


-- Consulta SQL:


-- Objetivo: Encontrar todos os clientes que estão localizados no estado de São Paulo (sigla = 'SP') e listar seus respectivos telefones.

-- JOINs: 


-- JOIN Cliente e Telefone: Para associar cada cliente com seus números de telefone.
-- JOIN Cliente e Estado: Para filtrar os clientes que estão no estado de São Paulo.
-- Resultado: A consulta retorna o id do cliente, o nome da razao_social, e o numero do telefone para todos os clientes do estado de São Paulo.