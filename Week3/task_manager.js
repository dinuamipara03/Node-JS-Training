// Create a task manager cli application which will allow user to list, add, edit, remove tasks.
// Tasks shall have title, description, due date etc. You can use following node modules: readline, path, fs. 
// Else you can use process.argv

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasksFile = 'file.json';

function loadTasks() {
    try {
        return JSON.parse(fs.readFileSync(tasksFile, 'utf8'));
    } catch (error) {
        return [];
    }
}

const args = process.argv.splice(2);//for remove default paths
const cases = args[0];

switch (cases) {
    case 'addTask':
        if (args.length < 4) {
            console.error('Usage: node task_Manager.js addTask <title> <description> <dueDate>');
            break;
        }
        const newTask = {
            title: args[1],
            description: args[2],
            dueDate: args[3]
        };
        const addTask = loadTasks();
        addTask.push(newTask);
        fs.writeFileSync(tasksFile, JSON.stringify(addTask, null, 2));
        console.log('Task added successfully!');
        break;

    case 'listTasks':
        const listtask = loadTasks();
        if (listtask.length === 0) {
            console.log('No tasks found!');
            break;
        }
        console.log('Tasks:');
        listtask.forEach((task, index) => {
            console.log(`${index + 1}. ${task.title} - ${task.description} - ${task.dueDate}`);
        });
        break;

    case 'removeTask':
        if (args.length < 2) {
            console.error('Usage: node task_Manager.js removeTask <index>');
            break;
        }
        const index = parseInt(args[1]) - 1;
        if (isNaN(index) || index < 0 || index >= loadTasks().length) {
            console.error('Invalid task index!');
            break;
        }
        const tasks = loadTasks();
        tasks.splice(index, 1);
        fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
        console.log('Task removed successfully!');
        break;

    case 'editTask':
        if (args.length < 3) {
            console.error('Usage: node task_Manager.js editTask <index> <property> <new value>');
            break;
        }
        const taskId = parseInt(args[1]) - 1;
        if (isNaN(taskId) || taskId < 0 || taskId >= loadTasks().length) {
            console.error('Invalid task index!');
            break;
        }
        const taskObj = loadTasks();
        const property = args[2];
        const newValue = args[3];

        if (!['title', 'description', 'dueDate'].includes(property)) {
            console.error('Invalid property to edit!');
            break;
        }

        taskObj[taskId][property] = newValue;
        fs.writeFileSync(tasksFile, JSON.stringify(taskObj, null, 2));
        console.log('Task edited successfully!');
        break;

    default:
        console.log('Supported commands:');
        console.log('addTask <title> <description> <dueDate>');
        console.log('listTasks');
        console.log('removeTask <index>');
        console.log('editTask <index> <property> <new value>');
}

rl.close();
