// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
    
// Read and print the user’s name and email
// Add a new property lastLogin: "2026-01-01"
// Update role from "student" to "admin"
// Delete the isActive property
// Use Object.keys() to list all remaining fields
let user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// Read and print the user’s name and email
console.log(user.name)
console.log(user.email)


// Add a new property lastLogin: "2026-01-01"
user.lasrlogin="2026-01-01"

// Update role from "student" to "admin"
user.role='admin'


// Delete the isActive property
delete user.isActive


// Use Object.keys() to list all remaining fields
console.log(Object.keys(user))


// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
    
// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Adding a new subject computer: 90
marks.computer=90
let totalmarks=0
let high=-9000
for(let i in marks){
    if(high < marks[i]){
        high=marks[i];
    }
    totalmarks+=marks[i]
}

// Calculate total marks
console.log(totalmarks)



// Calculate average marks
console.log(totalmarks/Object.keys(marks).length)


// Find the highest scoring subject
console.log(high)

/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified*/
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//1.Toggle theme between "light" and "dark"
if(settings.theme==="light"){
    settings.theme="dark"
}
else{
    settings.theme="light"
}
console.log("Toggled theme:",settings.theme)

//2. Turn autoSave to true
settings.autoSave=true
console.log("autoSave turned to:",settings.autoSave)

//3. Remove the notifications setting
delete settings.notifications
console.log("notifications setting removed:",settings)

//4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
//trying to modify after freezing
settings.language="fr" 
