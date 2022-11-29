const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sund = "sund";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sund;
console.log(daysOfWeek);



const daysOfWeekArrays = [mon, tue, wed, thu ,fri, sat, sund];
console.log(daysOfWeekArrays);

const nonsense = [1, 2, "hello", false, null, true, undefined, ''];
console.log(nonsense);

// Add one more day to the array 
daysOfWeekArrays.push("sun");

console.log(daysOfWeekArrays);

const toBuy =["potato", "tomato", "pizza"];

console.log(toBuy[2])