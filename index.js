const Task = require('./lib/classes/Task.js');
const { department, role, employee } = require('./lib/initialize.js');

// initialize the application and show prompts
const main = () => {
  const task = new Task(department, role, employee);
  task.select();
};

main();
