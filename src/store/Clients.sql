-- CREATE DATABASE crm_project
USE crm_project;

CREATE TABLE clients(
    id VARCHAR(50) PRIMARY KEY NOT NULL,
    name VARCHAR (80),
    email VARCHAR(30),
    first_contact DATETIME,
    emailType VARCHAR(5),
    sold BOOLEAN,
    employer VARCHAR(80),
    country VARCHAR(30)
)

-- DELETE FROM clients
-- DROP TABLE clients