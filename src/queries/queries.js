const db = require("../config/db")

exports.getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM employees";
        db.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

exports.getAllDepartments = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM department", (error, results) => {
            if (error) {
                console.error("Error fetching departments:", error);
                reject(error);
                return;
            }
            console.log("Fetched Departments", results);
            resolve(results);
        });
    });
};

exports.getAllRoles = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM role", (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.addEmployee = (employeeData) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO employees SET ?",
            employeeData,
            (error, results) => {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.addDepartment = (departmentName) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO department (name) VALUES (?)",
            departmentName,
            (error, results) => {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.addRole = (roleData) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            [roleData.title, roleData.salary, roleData.department_id],
            (error, results) => {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.updateEmp = (empId, updateField, newValue) => {
    return new Promise((resolve, reject) => {
        db.query(
            `UPDATE employees SET ?? = ? WHERE id = ?`,
            [updateField, newValue, empId],
            (error, results) => {
                if (error) reject(error);
                resolve(results);
            }
        );
        console.log(`Employee ${updateField}  updated to: ${newValue}`)
    });
};