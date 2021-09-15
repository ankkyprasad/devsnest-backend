# PostgreSQL

## Basic

```
CREATE USER devsnest WITH PASSWORD 'password'
CREATE DATABASE devs
GRANT ALL PRIVILEGES ON DATABASE devs to devsnest;
GRANT UPDATE PRIVILEGES ON DATABASE devs to devsnest;
INSERT INTO COMPANY(ID, NAME) VALUES(1, 'Paul')
\d COMPANY - to check all the keys inside the company
```

## Schema

```
CREATE SCHEMA schemaName
CREATE TABLE schemaName.company(...) - to create table inside a given schema
DROP SCHEMA schemaName - works only if the schema is empty
DROP SCHEMA schemaName CASCADE - delete schema and also the data inside the schema
```

## Select

```
SELECT CURRENT_TIMESTAMP
SELECT * FROM COMPANY - to display all the data inside the table company
SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 10000; 
SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 10000;
SELECT * FROM COMPANY WHERE SALARY IS NOT NULL;
SELECT * FROM COMPANY WHERE NAME LIKE 'P%'; - displays name which starts from letter p
SELECT * FROM COMPANY WHERE NAME LIKE 'P_ul'; - any letter can go inside the underscore
SELECT * FROM COMPANY WHERE SALARY::TEXT LIKE '100%'; - typecasting salary int to text 
SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27
SELECT * FROM COMPANY WHERE AGE IN (25,27)
```

## Update and Delete

```
UPDATE COMPANY SET SALARY = 15599 WHERE ID = 3
UPDATE COMPANY SET ADDRESS = 'Texas', SALARY = 2000 WHERE ID = 2;
DELETE FROM COMPANY WHERE ID = 2
```

## Connecting two tables

> To connect two tables in a database, primary key and foreign key is used. A connection is established between the two using some constraint.
<br>

```
CREATE TABLE customers(customer_id INT NOT NULL, customer_name varchar(255) NOT NULL, PRIMARY KEY(customer_id));

CREATE TABLE contacts(contact_id INT NOT NULL, customer_id INT, contact_name varchar(255) NOT NULL, phone varchar(15) NOT NULL, PRIMARY KEY(customer_id), CONSTRAINT fk_customer FOREIGN KEY(customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE);
```

> **References** takes the name of the table with which you want to establish the connection and the parameter assigned with the primary key.