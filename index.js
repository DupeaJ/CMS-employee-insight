const inquirer = require("inquirer");
const employeeController = require("./controllers/employeeController");

async function init() {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        },
    ]);

    if (action === "View all departments") {
        const departments = await employeeController.getAllDepartments();
        console.table(departments);
        init();
    } else if (action === "View all roles") {
        const roles = await employeeController.getAllRoles();
        console.table(roles);
        init();
    } else if (action === "View all employees") {
        const employees = await employeeController.getAllEmployees();
        console.table(employees);
        init();
    } else if (action === "Add a department") {
        const { departmentName } = await inquirer.prompt([
            {
                type: "input",
                name: "departmentName",
                message: "Enter department name:",
            },
        ]);
        await employeeController.addDepartment(departmentName);
        init();
    } else if (action === "Add a role") {
    const roleData = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter role title",
        },
        {
            type: "input",
            name: 'salary',
            message: "Enter role Salary",
        },
        {
            type: 'input',
            name: "department_id",
            message: "Enter the department ID for this role:",
        }
    ]);
    await employeeController.addRole(roleData);
    init();

    } else if (action === "Add an employee") {
        const employee = await inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter employee's first name:",
            },
            {
                type: "input",
                name: "last_name",
                message: "Enter employee's last name:",
            },
            {
                type: "input",
                name: "role_id",
                message: "Enter employee's role ID:",
            },
            {
                type: "input",
                name: "manager_id",
                message: "Enter employee's manager ID(or leave blank if none):",
                default: null,
            },
        ]);
        await employeeController.addEmployee(employee);
        init();
    } else if (action === "Update an employee role") {
        init();
    } else {
        process.exit();
    }
}

init();
