const { users, courses, cart, roles } = require('./data');
const userEngine = require('./user_processing_engine');
const courseEngine = require('./course_catalog_engine');
const cartEngine = require('./shopping_cart_engine');
const roleEngine = require('./rolepermission_engine');

console.log('=== ONLINE LEARNING PLATFORM ===\n');
console.log('Active Users:', userEngine.activeUsers);
console.log('Published Courses:', courseEngine.publishedCourses);
console.log('Cart Total:', cartEngine.totalCartAmount);
console.log('Permissions:', roleEngine.allPermissions);
