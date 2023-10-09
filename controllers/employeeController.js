const db = require("../src/config/db");
const queries = require("../src/queries/queries");

exports.getAllEmployees = async () => {
    try {
        const employees = await queries.getAllEmployees();
        return employees;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

exports.getAllDepartments = async () => {
    try {
        const departments = await queries.getAllDepartments();
        return departments;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

exports.getAllRoles = async () => {
    try {
        const roles = await queries.getAllRoles();
        return roles;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

exports.addEmployee = async (employeeData) => {
    try {
        await queries.addEmployee(employeeData);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

exports.addDepartment = async (departmentName) => {
    try {
        await queries.addDepartment(departmentName);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

exports.addRole = async (roleData) => {
    try {
        await queries.addRole(roleData);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};