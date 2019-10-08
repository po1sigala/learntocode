DROP DATABASE IF EXISTS collegesDB;
CREATE DATABASE collegesDB;
USE collegesDB;
CREATE TABLE colleges(
    id INT NOT NULL AUTO_INCREMENT,
    school_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);


SELECT * FROM colleges;

