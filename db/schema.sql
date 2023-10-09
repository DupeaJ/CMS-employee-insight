CREATE DATABASE IF NOT EXISTS employeeDB;

USE employeeDB;

CREATE TABLE department(
    id:INT PRIMARY KEY AUTO_INCREMENT,
    name: VARCHAR(30)
);

CREATE TABLE role(
    id: INT PRIMARY KEY,
    title: VARCHAR(30),
    salary: DECIMAL,
    department_id: INT
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INT,
    manager_id INT
);





