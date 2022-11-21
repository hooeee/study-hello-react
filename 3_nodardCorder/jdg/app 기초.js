// 변수와 상수 (const 지향 / let 가끔 / var 옛날 방식)
var a = 5;
let b = 2;
const name = "JDG";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + name);


// boolean, undefined, null
const amIFat = true;
console.log(amIFat); // true

let something;
console.log(something); // undefined

something = null;
console.log(something); // null


// 데이터 구조
// 배열
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", ];
const nonsense = [1, 2, "hello", false, null, true, undefined];

daysOfWeek.push("sun");

console.log(daysOfWeek[0]);
console.log(daysOfWeek, nonsense);

// object - name, value로 구성된 property 의 집합
const player = {
    name: "JDG",
    points: 10,
    fat: true,
    sayHello: function(personName) {
        console.log("Hello!", personName);
    }

};

console.log(player.name);
player.sayHello("JDG22");
player.sayHello("JDG33");


// // function - 코드의 재사용
// function sayHello (nameOfPerson, age) {
//     console.log("Hello! my name is " + nameOfPerson + "and I'm " + age);
// }

// sayHello("JDG1", 10);
// sayHello("JDG2", 23);
// sayHello("JDG3", 21);


// 계산기
const calculator = {
    add: function(a, b) {
        return a+b;
    },
    minus: function(a, b) {
        return a-b;
    },
    divide: function(a, b) {
        return a/b;
    },
    multi: function(a, b) {
        return a*b;
    },
    pow: function(a, b) {
        return a**b;
    },
}

calculator.add(3, 6);
calculator.minus(3, 6);
calculator.divide(3, 6);
calculator.multi(3, 6);
calculator.pow(3, 6);


console.log(calculator.add(3, 6)); // undefined


// return 으로 실제 값 반환
// const age = 96;
// function calcuateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calcuateKrAge(age);
// console.log(krAge);



// 데이터 타입
// const age = prompt("How old are you?");

// console.log(age, typeof age, parseInt(age));


// 조건문
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else {
    console.log("You can not drink");
}

// 연산자
if ((a && b) || (c && d) || (x || w)) {
    
}