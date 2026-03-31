-- Criação da tabela Aluno
CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY, -- Identificação única do aluno
    nome VARCHAR(50),
    idade INT
);

-- Criação da tabela Professor
CREATE TABLE Professor (
    id_professor INT PRIMARY KEY, -- Identificação única do professor
    nome_professor VARCHAR(50),
    cpf_professor VARCHAR(11) -- CPF do professor com tamanho padrão de 11 caracteres
);

-- Criação da tabela Escola
CREATE TABLE Escola (
    id_escola INT PRIMARY KEY, -- Identificação única da escola
    nome_escola VARCHAR(50),
    cnpj_escola VARCHAR(14) -- CNPJ da escola com tamanho padrão de 14 caracteres
);

-- Inserção de dados na tabela Aluno
INSERT INTO Aluno (id_aluno, nome, idade) 
VALUES 
(1, 'Ana Costa', 18),
(2, 'João Silva', 20),
(3, 'Maria Oliveira', 19);

-- Inserção de dados na tabela Professor
INSERT INTO Professor (id_professor, nome_professor, cpf_professor) 
VALUES 
(1, 'Carlos Pereira', '12345678901'),
(2, 'Fernanda Santos', '23456789012'),
(3, 'Rafael Almeida', '34567890123');

-- Inserção de dados na tabela Escola
INSERT INTO Escola (id_escola, nome_escola, cnpj_escola) 
VALUES 
(1, 'Escola Estadual Central', '12345678000101'),
(2, 'Colégio Municipal Norte', '23456789000202'),
(3, 'Instituto Educacional Sul', '34567890000303');

-- Exibe dados inseridos na tabela Aluno
SELECT * FROM Aluno; 
