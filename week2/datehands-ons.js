/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.*/
let currentDate = new Date();


/* 2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds*/

let year=currentDate.getFullYear();
let month=currentDate.getMonth();
let date=currentDate.getDate();
console.log(date);
let day=currentDate.getDay();
let hours=currentDate.getHours();
let minutes=currentDate.getMinutes();
let seconds=currentDate.getSeconds();
 console.log(month);
/*3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
    



console.log(date,"-",month,"-",year," ",hours,":",minutes,":",seconds);







/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"*/

let enrollmentDeadline = new Date("2026-01-20");
if(currentDate<enrollmentDeadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");

}

/* 2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/

/*let input=new Date("2026-02-30");
if(input.getMonth<12 && input.getData>=0)*/

let inputdate="2026-02-30";
let dateparts=inputdate.split("-");
//converting string parts to integer
let yearpart=parseInt(dateparts[0]);
let monthpart=parseInt(dateparts[1]);
let daypart=parseInt(dateparts[2]);
let isValid=true;
//validating year, month and day
if(monthpart<1 || monthpart>12){
    isValid=false;
}
else{
    let daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if((yearpart%4==0 && yearpart%100!=0) || (yearpart%400==0)){
        daysInMonth[1]=29;
    }
    if(daypart<1 || daypart>daysInMonth[monthpart-1]){
        isValid=false;
    }
}
if(isValid){
    console.log("Date is valid");
}







/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years

*/
let dob = "2000-05-15";

let bday=new Date(dob);
let yeardiff=currentDate.getFullYear()-bday.getFullYear();
let monthdiff=currentDate.getMonth()-bday.getMonth();
if(monthdiff<0){
    yeardiff--;
}
console.log("Age in years:",yeardiff);

