//MODULE 4: ROLE & PERMISSION ENGINE
const { users, courses, cart, roles } = require('./data');
  //-> Get all role names
    const roleNames=Object.keys(roles);
  //-> Check if student can delete
    const studentCanDelete=roles.student.includes("delete");
  //-> Create a flat list of all unique permissions
    const allPermissions=[...new Set(Object.values(roles).flat())];
  //-> Add new role moderator immutably
    const addRole=(newRole,permissions)=>({...roles,[newRole]:permissions});

module.exports = { roleNames, studentCanDelete, allPermissions, addRole };