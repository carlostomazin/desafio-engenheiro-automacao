CREATE DATABASE desafio;

USE desafio;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(220) UNIQUE,
    senha VARCHAR(255)
);

INSERT INTO users (nome, senha) VALUES ("carlos", "$2a$08$/S/JZcRkDtkRD3yzYEemtuhueWRaceL3xwJQEoDBvWM8urivzxE3i");