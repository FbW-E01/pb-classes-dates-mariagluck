// 1. create a date object with today's date
const today = new Date();
console.log(today);

// 2. create a date object with the date of 1 January 2017
const backThenDate = new Date(2017, 0, 2);
console.log(backThenDate);
//also like this
const yearsAgo = new Date(2017, 0, 1, 1, 0, 0, 0);
console.log(yearsAgo);

// 3. find the number of days between today and 1 Jan 2017

const presentDay = new Date();
const dateInPast = new Date("01/01/2017");

const differenceInTime = presentDay.getTime() - dateInPast.getTime();
  
// To calculate the no. of days between two dates divide the time difference of both the dates by no. of milliseconds in a day (1000*60*60*24)
const differenceInDays = differenceInTime / (1000 * 3600 * 24);

console.log(`Total number of days between dates ${presentDay} and ${dateInPast} is : ${differenceInDays.toFixed(0)}`);

 // Total number of days between dates Thu May 20 2021 15:22:40 GMT+0200 (Central European Summer Time) and Sun Jan 01 2017 00:00:00 GMT+0100 (Central European Standard Time) is : 1600 (or 1599.333)


// 4. create an array of objects for each day between today and 1 Jan 2017

//     Something like this: [ { date: "01.01.2017" }, { date: "02.01.2017" }, ..... ];
// const daylist = getDaysArray(new Date("2017-01-01"),new Date());
// daylist.map((v)=>v.toISOString().slice(0,10)).join("");


const datesArray = [];
for (let i = 0; i < Math.round(differenceInDays); i++) {
    const unix = dateInPast.getTime() + i * (1000 * 60 * 60 * 24);
    const stringDate = new Date(unix).toString().slice(4, 15);
    const readyObject = {date: stringDate}
    datesArray.push(readyObject);
}

console.log(datesArray); 

// 5. randomly set either a true or a false a boolean property called `workout` on each date object in the array

const workoutBoolean = () => Boolean(Math.round(Math.random()));

for (let element of datesArray) { 
     element["workout"] = workoutBoolean();

}
console.log(datesArray);

//it prints: for example:
// { date: 'May 11 2021', workout: false }
// { date: 'May 12 2021', workout: false }
// { date: 'May 13 2021', workout: true }
// { date: 'May 14 2021', workout: true }
// { date: 'May 15 2021', workout: false }


// 6. is the workout for the first day of the year true?

let didIWorkout = datesArray.filter(x => { return x.date.indexOf("Jan 01") >= 0 ;})
console.log(didIWorkout);
//it prints;
// [
//     { date: 'Jan 01 2017', workout: true },
//     { date: 'Jan 01 2018', workout: true },
//     { date: 'Jan 01 2019', workout: true },
//     { date: 'Jan 01 2020', workout: false },
//     { date: 'Jan 01 2021', workout: true }
//   ]

// or one by one:
let start2017 = datesArray.find(obj => obj.date == "Jan 01 2017");
console.log(start2017);
let start2018 = datesArray.find(obj => obj.date == "Jan 01 2018");
console.log(start2018);
let start2019 = datesArray.find(obj => obj.date == "Jan 01 2019");
console.log(start2019);
let start2020 = datesArray.find(obj => obj.date == "Jan 01 2020");
console.log(start2020);
let start2021 = datesArray.find(obj => obj.date == "Jan 01 2021");
console.log(start2021);

//it prints:
// { date: 'Jan 01 2017', workout: false }
// { date: 'Jan 01 2018', workout: false }
// { date: 'Jan 01 2019', workout: false }
// { date: 'Jan 01 2020', workout: true }
// { date: 'Jan 01 2021', workout: true }

// 7. is the workout for seven days ago true?


const weekAgo = datesArray[datesArray.length - 7]; 
console.log(weekAgo); // helper
//it prints: { date: 'May 20 2021', workout: true } 
const workoutWeekAgo = weekAgo.workout ? "yes it is true" : "no it is false";
console.log(workoutWeekAgo);
//it prints: yes it is true


