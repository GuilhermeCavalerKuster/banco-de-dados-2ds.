CREATE TABLE Clientes (
    ID INT PRIMARY KEY,
    nomeCliente VARCHAR(255),
    emailCliente VARCHAR(255)
);

CREATE TABLE Compras (
    CompraID INT PRIMARY KEY,
    ClienteID INT,
    NomeLivro VARCHAR(255),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ID)
);
SELECT * FROM Clientes;
  CompraID INT PRIMARY KEY,
    ClienteID INT,
    NomeLivro VARCHAR(255),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ID)
);

-- Inserção de dados na tabela Clientes
INSERT INTO Clientes (ID, nomeCliente, emailCliente) VALUES
(1, 'João Silva', 'joao.silva@email.com'),
(2, 'Maria Santos', 'maria.santos@email.com'),
(3, 'Pedro Oliveira', 'pedro.oliveira@email.com'),
(4, 'Ana Costa', 'ana.costa@email.com'),
(5, 'Carlos Ferreira', 'carlos.ferreira@email.com');

-- Inserção de dados na tabela Compras
INSERT INTO Compras (CompraID, ClienteID, NomeLivro) VALUES
(101, 1, 'O Senhor dos Anéis'),
(102, 1, '1984'),
(103, 2, 'Dom Casmurro'),
(104, 3, 'O Cortiço'),
(105, 2, 'O Pequeno Príncipe'),
(106, 4, 'Harry Potter e a Pedra Filosofal'),
(107, 5, 'O Código Da Vinci'),
(108, 3, 'O Hobbit'),
(109, 4, 'Cem Anos de Solidão'),
(110, 5, 'O Alienista');
ORDER BY c.nomeCliente;
