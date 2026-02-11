/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------*/
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


/*TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users*/
    const activeUsers=users.filter(user=>user.active);
  //-> Extract names of active users
    const activeUserNames=activeUsers.map(user=>user.name);
  //-> Check if any admin exists
    const anyAdmin=users.some(user=>user.role==="admin");
  //-> Find user by id
    const findUserById=(id)=>users.find(user=>user.id===id);
  //-> Deactivate a user immutably
    const deactivateUser=(userId)=>users.map(user=>user.id===userId?{...user,active:false}:user);

//MODULE 2: COURSE CATALOG ENGINE
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

//MODULE 3: SHOPPING CART ENGINE 
  //-> Merge cart with courses to get full course info
    const cartWithCourseInfo=cart.map(cartItem=>{
      const course=courses.find(c=>c.id===cartItem.courseId);
      return {course,qty:cartItem.qty};
    });
  //-> Calculate total cart amount
    const totalCartAmount=cartWithCourseInfo.reduce((sum,item)=>sum+item.course.price*item.qty,0);
  //-> Increase quantity of a course (immutably)
    const increaseQuantity=(courseId,qtyToAdd)=>cart.map(item=>item.courseId===courseId?{...item,qty:item.qty+qtyToAdd}:item);
  //-> Remove a course from cart
    const removeCourse=(courseId)=>cart.filter(item=>item.courseId!==courseId);
  //-> Check if all cart items are paid courses

//MODULE 4: ROLE & PERMISSION ENGINE
  //-> Get all role names
    const roleNames=Object.keys(roles);
  //-> Check if student can delete
    const studentCanDelete=roles.student.includes("delete");
  //-> Create a flat list of all unique permissions
    const allPermissions=[...new Set(Object.values(roles).flat())];
  //-> Add new role moderator immutably
    const addRole=(newRole,permissions)=>({...roles,[newRole]:permissions});
