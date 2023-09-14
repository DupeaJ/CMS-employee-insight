const inquirer = require("inquirer");
const employeeController = require("./controllers/employeeController");

async function init() {
    const { action } = await inquirer.createPromptModule([
        {
            type: "list",
            name: "action",
            message: "what would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
            ],
        },
    ]);

    if (action === "view all departments") {
        const employee = await inquirer.prompt([
            { type: "input", name: "name", message: "Enter employee name:" },
            {
                type: "input",
                name: "position",
                message: "Enter employee position:",
            },
            {
                type: "input",
                name: "department",
                message: "Enter employee department:",
            },
        ]);

        employeeController.addEmployee(employee);
        init();
    } else if (action === "View Employees") {
        console.log(employeeController.getAllEmployees());
        init();
    } else {
        process.exit();
    }
}

init();
