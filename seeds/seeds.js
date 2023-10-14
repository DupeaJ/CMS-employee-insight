const connection = require("../src/config/db");
const seedDepartments = require("./departmentsSeeds");
const seedEmployees = require("./employeeSeeds");
const seedRoles = require("./roleSeeds");

const seedAll = () => {


        console.log("Connected to DB for seeding.");

        seedDepartments((err) => {
            if (err) {
                console.error("Error seeding departments:", err);
                return;
            }

            seedRoles((err) => {
                if (err) {
                    console.error("Error seeding roles:", err);
                    return;
                }

                seedEmployees((err) => {
                    if (err) {
                        console.error("Error seeding employees:", err);
                        return;
                    }

                    console.log("Database seeded");

                    connection.end((err) => {
                        if (err) {
                            console.error("Error closing connection:", err);
                            return;
                        }

                        console.log("Connection closed.");
                    });
                });
            });
        });
    };


module.exports = seedAll;
