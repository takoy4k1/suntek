/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


    //1. filter() employees from IT department
let res1=employees.filter(empObj =>empObj.department==='IT')
   // 2. map() to add:netSalary = salary + 10% bonus
let res2=res1.map(empObj =>({...empObj, netSalary: empObj.salary + (empObj.salary * 0.1)}))

    //3. reduce() to calculate total salary payout
let res3=employees.reduce((acc,empObj)=>(acc+empObj.salary),0)
    //4. find() employee with salary 30000
let res4=employees.find(empObj =>empObj.salary===30000)
    //5. findIndex() of employee "Neha"
let res5=employees.findIndex(empObj =>empObj.name==="Neha")
console.log("employees from IT department:",res1)