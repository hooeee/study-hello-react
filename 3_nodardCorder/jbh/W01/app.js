console.log(123123);
console.log("hello");

const a = 5;
const b = 2;
let myName = "beom"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new  name is " + myName); 

const amIFat = true;

console.log(amIFat);

const nullValue = null;
console.log(nullValue);

let something;
console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fir = "fir";
const sat = "sat";
const sund = "sund";

const daysOfWeek = mon + tue + wed + thu + fir + sat + sund;

console.log(daysOfWeek);

const daysOfWeekArray = ["mon", "tue", "wed", "thu", "fir", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "beom"];

console.log(daysOfWeekArray);
console.log(nonsense);

// Get Item from Array
console.log(daysOfWeekArray[4]);

// Add one more day to the array
daysOfWeekArray.push("sun");

console.log(daysOfWeekArray);

const plqyerName = "beom"
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// const player = ["beom", 121212, false, "little bit"];


const player =  {
    name: "beom",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player.fat);

console.log(player["name"]);

player.lastName = "potato";
console.log(player);

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is" + nameOfPerson + "and I'm " + age
    );
}

sayHello("A", 10);
sayHello("B", 20);
sayHello("C", 21);
sayHello("D", 33);

function plus (firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide (firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

plus(8, 60);
divide(98, 20);

const player2 = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("hello " + otherPersonsName + "nice to meet you.");
    }
};

console.log(player2.name);
player2.sayHello("lynn");

let isBeomFat = true;
isBeomFat = false;

console.log(isBeomFat);