 //iii. app.js - Main application
                  // TODO: Import task functions

                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again

const { addTask, getAllTasks, completeTask } = require('./task');

// 1. Add some tasks
console.log(addTask("Buy groceries", "High", "2024-07-01"));
console.log(addTask("Read a book", "Medium", "2024-07-05"));

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log("All Tasks after completion:", getAllTasks());
