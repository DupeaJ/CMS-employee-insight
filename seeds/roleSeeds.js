const connection = require("../src/config/db");

const seedRoles = (callback) => {
    const query = `
    INSERT INTO role (title, salary, department_id) VALUES
    ('Manager', 65000, 0),
    ('Employee', 35000, 0),
    ('Grocery Manager', 50000, 2),
    ('Janitor', 45000, 3),
    ('Shift Lead', 40000, 0),
    ('IT Tech', 40000, 1),
    ('Floor Worker', 35000, 4),
    ('Electronics', 35000, 1);
    `;

    connection.query(query, (err, result) => {
        if (err) return callback(err);
        console.log("Roles seeded:", result);
        callback(null);
    });
};

module.exports = seedRoles;
