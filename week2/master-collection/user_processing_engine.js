/*TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users*/
const { users, courses, cart, roles } = require('./data');
    const activeUsers=users.filter(user=>user.active);
  //-> Extract names of active users
    const activeUserNames=activeUsers.map(user=>user.name);
  //-> Check if any admin exists
    const anyAdmin=users.some(user=>user.role==="admin");
  //-> Find user by id
    const findUserById=(id)=>users.find(user=>user.id===id);
  //-> Deactivate a user immutably
    const deactivateUser=(userId)=>users.map(user=>user.id===userId?{...user,active:false}:user);

module.exports = { activeUsers, activeUserNames, anyAdmin, findUserById, deactivateUser };