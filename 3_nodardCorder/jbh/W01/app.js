// console.log(123123);
// console.log("hello");

// const a = 5;
// const b = 2;
// let myName = "beom"

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";

// console.log("your new  name is " + myName); 

// const amIFat = true;

// console.log(amIFat);

// const nullValue = null;
// console.log(nullValue);

// let something;
// console.log(something);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fir = "fir";
// const sat = "sat";
// const sund = "sund";

// const daysOfWeek = mon + tue + wed + thu + fir + sat + sund;

// console.log(daysOfWeek);

// const daysOfWeekArray = ["mon", "tue", "wed", "thu", "fir", "sat"];
// const nonsense = [1, 2, "hello", false, null, true, undefined, "beom"];

// console.log(daysOfWeekArray);
// console.log(nonsense);

// // Get Item from Array
// console.log(daysOfWeekArray[4]);

// // Add one more day to the array
// daysOfWeekArray.push("sun");

// console.log(daysOfWeekArray);

// const plqyerName = "beom"
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// // const player = ["beom", 121212, false, "little bit"];


// const player =  {
//     name: "beom",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player.points);
// console.log(player.fat);

// console.log(player["name"]);

// player.lastName = "potato";
// console.log(player);

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is" + nameOfPerson + "and I'm " + age
//     );
// }

// sayHello("A", 10);
// sayHello("B", 20);
// sayHello("C", 21);
// sayHello("D", 33);

// function plus (firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide (firstNumber, secondNumber) {
//     console.log(firstNumber / secondNumber);
// }

// plus(8, 60);
// divide(98, 20);

// const player2 = {
//     name: "nico",
//     sayHello: function(otherPersonsName) {
//         console.log("hello " + otherPersonsName + "nice to meet you.");
//     }
// };

// console.log(player2.name);
// player2.sayHello("lynn");

// let isBeomFat = true;
// isBeomFat = false;

// console.log(isBeomFat);

// const calculator = {
//     plus: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     },
//     times: function(a, b) {
//         return a * b;
//     },
//     divide: function(a, b) {
//         return a / b;
//     },
//     power: function(a, b) {
//         return a ** b;
//     }
// }

// console.log(calculator.plus(2, 3));
// console.log(calculator.minus(2, 3));
// console.log(calculator.times(2, 3));
// console.log(calculator.divide(2, 3));
// console.log(calculator.power(2, 3));

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(plusResult, 10);
// const timeResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timeResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(plusResult);
// console.log(minusResult);
// console.log(timeResult);
// console.log(divideResult);
// console.log(powerResult);

// // const result = parseInt(prompt("How old are you?"));

// // // console.log(result, parseInt(result));
// // // console.log(typeof result, typeof parseInt(result))

// // const age2 = parseInt(123);

// // console.log(prompt("How old are you?"));

// // if (isNaN(age2)) {
// //     console.log("Please write a number");
// // } else if (age2 < 18) {
// //     console.log("Thank you for writing your age.");
// // } else {
// //     console.log("You can drink.");
// // }



// const title = document.getElementById('title');

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);a

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");

// console.log(title);

// const title = document.querySelector(".hello h1");


// console.dir(title);

// title.style.color = "blue";

// const title = document.querySelector(".hello h1");

// function handleTitleClick(){
//     // console.log(title.style.color);
//     // title.style.color = "blue";
//     // console.log(title.style.color);
//     const currentColor = title.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }

//     title.style.color = newColor;
// }

// function handleMouseEnter(){
//     console.log("mouse is here");
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     console.log("mouse leave");
//     title.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("All Good!");
// }

// title.addEventListener("click", handleTitleClick);

// title.addEventListener("mouseenter",handleMouseEnter);

// title.addEventListener("mouseleave",handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);

// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);

// window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "active";
    // h1.className = "active";
    // console.log(h1.className);
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);

