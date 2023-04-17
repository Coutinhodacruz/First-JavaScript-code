// let prompt = require("prompt-sync")()
//
// function calculateMenstrualCycle(startDate, cycleLength) {
//     const menstrualDays = [];
//
//     const date = new Date(startDate.getTime());
//     date.setDate(startDate.getDate() + cycleLength);
//
//     const nextStartDate = new Date(date.getTime());
//     nextStartDate.setDate(date.getDate() + 1);
//
//     let currentDate = new Date(startDate.getTime());
//     while (currentDate <= date) {
//         menstrualDays.push(new Date(currentDate.getTime()));
//         currentDate.setDate(currentDate.getDate() + 1);
//     }
//
//     return {
//         startDate,
//         endDate: date,
//         nextStartDate,
//         menstrualDays,
//         cycleLength,
//     };
// }
//
// const startDate = new Date('2023-04-10');
// const cycleLength = 28;
//
// const menstrualCycle = calculateMenstrualCycle(startDate, cycleLength);
//
// console.log(menstrualCycle);



// This function takes two arguments: startDate and cycleLength.
// startDate is a Date object representing the start date of the current menstrual cycle,
// and cycleLength is the length of the menstrual cycle in days.
//     The function calculates the end date of the current menstrual cycle by adding cycleLength days to the startDate
//     . It then calculates the start date of the next menstrual cycle by adding one day to the endDate.
//
//     The function then loops through each day of the menstrual cycle, adding each day to an array called menstrualDays.
//     Finally, the function returns an object containing the start date, end date, start date of the next cycle, array of menstrual days, and cycle length.
//
//     Here's an example usage of the function:




function calculateMenstralCycle(startDate, startMonth, startYear, menstrualCycle) {
    const current = new Date(startDate, startMonth-1,startYear);
    const secondCurrentDate = new Date(startYear, startMonth-1, startDate);
    current.setDate(current.getDate() + parseInt(menstrualCycle) + parseInt("5"));
    secondCurrentDate.setDate(secondCurrentDate.getDate() + parseInt(menstrualCycle))
    console.log(`Your next day will be:  ${secondCurrentDate} and ${current}`);




}
const day = prompt("Enter the start day");
const month = prompt("Enter the month")
const year = prompt("Enter the year")
const cycleLengthStr = prompt("Enter the cycle length (in days):");

calculateMenstralCycle(day,month,year,cycleLengthStr);






