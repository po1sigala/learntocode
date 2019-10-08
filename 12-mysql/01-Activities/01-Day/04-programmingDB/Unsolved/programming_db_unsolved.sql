-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;
CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id  INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
  name VARCHAR(30) NOT NULL,
  -- Create an integer column called "rating" --
  rating INTEGER(10),
  -- Create a boolean column called "mastered" which will automatically fill --
  mastered BOOLEAN DEFAULT true,
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary keyid
  PRIMARY KEY(id)
);

-- Create new example rows
INSERT INTO programming_languages(name,)