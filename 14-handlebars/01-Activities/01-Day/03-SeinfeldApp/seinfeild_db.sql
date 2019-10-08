-- DROP DATABASE IF EXISTS seinfeild_db;
CREATE DATABASE seinfeild_db;
USE seinfeild_db;

CREATE TABLE actors
(
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NULL,
    coolness_points int(10),
    attitude VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO actors
    (name,coolness_points,attitude)
VALUES
    ("Elaine",3,"neurotic");
INSERT INTO actors
    (name,coolness_points,attitude)
VALUES
    ("George",7,"Frantic");
INSERT INTO actors
    (name,coolness_points,attitude)
VALUES
    ("Kramer",8,"deranged");
INSERT INTO actors
    (name,coolness_points,attitude)
VALUES
    ("Soup Nazi",10,"ANGRY");

