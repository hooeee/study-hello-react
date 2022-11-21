
//// variables
const a = 5;
const b = "2";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let myName = "sy";

console.log("myname = " + myName);

myName = "sungyun";

console.log("myname = " + myName);

//// array
const etcArray = [1, null, "array", undefined, "19023", "test"];
const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeeks[4]);

daysOfWeeks.push("sun");


//// object
const player = {
    name : "sy",
    points : 10,
    fat : true
}

console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player.fat);

player.Age = 15;

console.log(player);

//// Function 1, 2
function sayHello() {
    console.log("Hello");
}

sayHello();

function sayHello(nameOfPerson){
    console.log("Hello " + nameOfPerson);
}

sayHello("sungyun");


const innerfunction = {
    name : "testSy",
    sayHello: function() {
        console.log("function Hello");
    }
}

innerfunction.sayHello();

//// Recap 2 calculator

// const calculator = {
//     name : "calculator",
//     add : function(a,b) {
//         console.log("a + b = " + (a+b));
//     },
//     mod : function(a,b) {
//         console.log("a % b = " + a%b);
//     },
//     minus : function(a,b) {
//         console.log("a - b = " + a-b);
//     },
//     divide : function(a,b) {
//         console.log("a / b = " + a/b);
//     },
//     power : function(a,b) {
//         console.log("a ** b = " + a**b);
//     },
//     times : function(a,b) {
//         console.log("a * b = " + a*b);
//     }
// }

// calculator.add(3,2);
// calculator.mod(3,2);
// calculator.minus(3,2);
// calculator.divide(3,2);
// calculator.power(3,2);
// calculator.times(3,2);

//// return
// const age = 28;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2; 
// }
// console.log(calculateKrAge(age));

//// conditionals
const age = prompt("How old are you?");

// type 확인
console.log(typeof age , typeof parseInt(age));

// string -> Int
parseInt("145");

if(isNaN(age) || age < 0){
    console.log("숫자를 입력해주세요");
} else if(age < 30) {
    console.log("젊네요");
} else if(age == 100) {  
    console.log("100살!");
} else {
    console.log("나이를 입력하였습니다.");
}