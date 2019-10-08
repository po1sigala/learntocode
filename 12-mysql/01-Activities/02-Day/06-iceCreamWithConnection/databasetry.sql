DROP DATABASE IF EXISTS randomStuff;

CREATE DATABASE randomStuff;

USE randomStuff;

CREATE TABLE    Characters (
    id INT NOT NULL AUTO_INCREMENT,
    name  VARCHAR(100) NULL,
    allegience VARCHAR(20) NULL,
    PRIMARY KEY(id)

);
INSERT INTO Characters (name, allegience)
    VALUES("Vegeta","Good");

SELECT * FROM Characters;