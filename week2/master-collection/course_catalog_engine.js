//MODULE 2: COURSE CATALOG ENGINE
const { users, courses, cart, roles } = require('./data');
  //-> Get published courses
    const publishedCourses=courses.filter(course=>course.published);
 // -> Sort courses by price (high → low)
    const sortedCoursesByPrice=[...courses].sort((a,b)=>b.price-a.price);
  //-> Extract { title, price } only
    const courseInfo=publishedCourses.map(course=>({title:course.title,price:course.price}));
  //-> Calculate total value of published courses
    const totalValue=publishedCourses.reduce((sum,course)=>sum+course.price,0);
  //-> Add a new course immutably
    const addCourse=(newCourse)=>[...courses,newCourse];
module.exports = { publishedCourses, sortedCoursesByPrice, courseInfo, totalValue, addCourse };