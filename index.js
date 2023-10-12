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
        const employees = await employeeController.getAllEmployees();

        const employeeChoices = employees.map(emp => ({
            name: `${emp.first_name} ${emp.last_name}`,
            value: emp.id
        }));
        const { employeeId } = await inquirer.prompt([
            {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update:',
            choices: employeeChoices
            }
        ]);
        const { updateField } = await inquirer.prompt([
            {
                type: 'list',
                name: 'updateField',
                message: 'What would you like to update?',
                choices: [
                    'First Name',
                    'Last Name',
                    'Role ID',
                    'Manager ID',
                    'Cancel'
                ]
            }
        ]);
        let dbUpdateField = updateField;
        switch (updateField) {
            case "First Name":
                dbUpdateField = "first_name";
                break;
            case "Last Name":
                dbUpdateField = "last_name";
                break;
            case "Role ID":
                dbUpdateField = "role_id";
                break;
            case "Manager ID":
                dbUpdateField = "manager_id";
                break;
        }
        if (updateField !== "Cancel") {
            const { newValue } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'newValue',
                    message: `Enter new ${updateField}:`
                }
            ]);
        
        await employeeController.updateEmp(employeeId, dbUpdateField, newValue);
        }
        init();
    } else {
        process.exit();
    }
}

init();
