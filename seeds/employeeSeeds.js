const connection = require("../src/config/db");

const seedEmployees = (callback) => {
    const query = `
    INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Snipes', 'Janitor', 1111),
    ('Sarah', 'Barde', 'Manager', 1345),
    ('Steve', 'Lin', 'Employee', NULL),
    ('Billy', 'Gates', 'Electronics', 1212),
    ('Gala', 'Swin', 'Employee', NULL),
    ('Tom', 'Ridder', 'Employee', NULL),
    ('Gracelyn', 'Woo', 'Employee', NULL),
    ('Cruz', 'Main', 'Grocery Manager', NULL),
    ('Klide', 'Wilson', 'IT Tech', NULL),
    ('Lily', 'Moon', 'Shift Lead', NULL),
    ('Ezza', 'Sabor', 'Floor Worker', NULL);
    `;

    connection.query(query, (err, result) => {
        if (err) return callback(err);
        console.log("Employees seeded:", result);
        callback(null);
    });
};

module.exports = seedEmployees;
