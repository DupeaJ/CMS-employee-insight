const db = require("../src/config/db");

const seedDepartments = (callback) => {
    const query = `
    INSERT INTO department (name) VALUES
    ('Electronics'),
    ('Grocery'),
    ('Maintenance'),
    ('Clothing');
    `;

    db.query(query, (err, result) => {
        if (err) return callback(err);
        console.log("Departments seeded:", result);
        callback(null);
    });
};

module.exports = seedDepartments;
