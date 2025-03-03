// Add a new task
const tasks=[];
function addTask(task){
    if(!task){
        return console.log(`Please enter a task`);
    }
    
tasks.push({text:task,date:new Date().toDateString()});
console.log(`Added task: ${task}`);
}

// List all tasks
function listTasks(){
    tasks.forEach(function(task){console.log(task)});
}


// Remove a task by its index
function removeTask(index){
    console.log("Add index which you want to delete:", index);
    let removedTask = tasks.splice(index, 1);
    console.log(`Removed task: ${removedTask[0].text}`);
}


// Show tasks added today
function todayTask(){
    let today = new Date().toDateString();
    let todaysTask = tasks.filter(task=>task.date==today);
    console.log(`Today's task:`);
    todaysTask.forEach((task) => {
        console.log(`${task.text}`);
    });
}


console.log(`Add task:`);
addTask("run");
addTask("read");
addTask("Write");
addTask("delete");
addTask("stay");

console.log(`List tasks:`);
listTasks();

console.log(`Remove task:`)
removeTask(2);
console.log(`After removing:`)
listTasks();

todayTask();
