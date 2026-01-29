//MODULE 3: SHOPPING CART ENGINE
const { users, courses, cart, roles } = require('./data');
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
module.exports = { cartWithCourseInfo, totalCartAmount, increaseQuantity, removeCourse };