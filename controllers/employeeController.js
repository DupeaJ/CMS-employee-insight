const db = require('../models/database');

const viewAllDepartments = () => {
    console.table(db.getDepartments());
};

function getAllEmployees() {
    return employeeModel.getAllEmployees();
}

module.exports = {
    addEmployee,
    getAllEmployees,
};