// alert("hi")

// console.log(5454545454);

// console.log(5+2);
// console.log(5*2);
// console.log(5/2);

/// //const
// const a = 5;
// const b = 2;
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);


// //let과 변수 사용
// let a = 5;
// let b = 2;
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);


// bolean
// const amIFat = true;
// const amIFat1 = false;

// //null
// const amIFat = null;

// //undefine
// const amIFat = null;
// let something;
// console.log(something);

// array
// // before
// const mon = "mon";
// const tue = "tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat = "sat";
// const sun ="sum";
// const daysOfWeek = mon + the + wed + thu + fri + sat + sun;
// console.log(daysOfWeek);
// // after
// const mon = "mon";
// const tue = "tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat = "sat";
// const sun ="sun";
// const daysOfWeek = [mon ,tue, wed, thu, fri , sat , sun];
// const nonsense = [1,2,"hello",false,null,true,undefined,"3dpit"];
// console.log(daysOfWeek,nonsense);

// //요소 찾기
// const mon = "mon";
// const tue = "tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat = "sat";
// const sun ="sun";
// const daysOfWeek = [mon ,tue, wed, thu, fri , sat , sun];

// console.log(daysOfWeek[0]); //mon
// console.log(daysOfWeek[1]); //tue
// console.log(daysOfWeek[2]); //wed

// // 베열에 요소 집어넣기
// const mon = "mon";
// const tue = "tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat = "sat";
// const sun ="sun";
// const daysOfWeek = [mon ,tue, wed, thu, fri , sat , sun];
// console.log(daysOfWeek); //mon
// daysOfWeek.push("3dpitDay");
// console.log(daysOfWeek[7]); //mon
// console.log(daysOfWeek); //mon

// // object
// const player = {
//     name: "3dpit",
//     point: 121212,
//     handsome: true,
//     fat: "litte bit"
// };
// // console.log(player);
// // console.log(player.name);
// // console.log(player.point);
// // console.log(player.handsome);
// // console.log(player.fat);
// //이름으로 접근하는 법
// console.log(player["name"]);
// console.log(player["point"]);
// console.log(player["handsome"]);
// console.log(player["fat"]);
// // 업데이트 방법
// player.fat =false;
// console.log(player["name"]);
// console.log(player["point"]);
// console.log(player["handsome"]);
// console.log(player["fat"]);
// // 항목 추가
// console.log(player);
// player.address = "매탄동";
// console.log(player);

// // Function
// // before
// function sayHello(){
//     console.log("Hello!");
// }
// sayHello();
// sayHello();
// sayHello();

// Function
// after
// function sayHello(nameOfPerson){
//     console.log("Hello! " + nameOfPerson);
// }
// sayHello("3dpit");
// sayHello("4dpit");
// sayHello("5dpit");
// function plus(a, b){
//     console.log(a+b);
// }
// plus(1,2,);

// //응용사용
// const player ={
//     name : "3dpit",
//     sayHello : function(){
//         console.log("Hello");
//     },
// };
// console.log(player.name);
// player.sayHello();


// //계산기 만들기 과제
// const calculator ={
//     add: function(a,b){
//         console.log(a+b);
//     },
//     minus: function(a,b){
//         console.log(a-b);
//     },
//     divide: function(a,b){
//         if(b==0) console.log("0으로 나눌 수 없음")
//         else console.log(a/b);
//     },
//     powerof: function(a,b){
//         console.log(a**b);
//     }
// };

// calculator.add(1,2);
// calculator.minus(1,2);
// calculator.divide(1,0);
// calculator.powerof(2,3);

// //Returns
// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner+2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


// const calculator ={
//     add: function(a,b){
//         },
//     minus: function(a,b){
//         return a-b;
//     },
//     multiple: function(a,b){
//         return a*b;
//     },
//     divide: function(a,b){
//         if(b==0) return "0으로 나눌 수 없음";
//         else return a/b;
//     },
//     powerof: function(a,b){
//         return a**b;
//     }
// };

// const plusResult = calculator.add(1,2);
// calculator.minus(1,2);
// calculator.divide(1,0);
// calculator.powerof(2,3);

// console.log(plusResult);

// //의존성을 지니면 동작하는
// const minusResult = calculator.minus(plusResult,2);
// const multipleResult = calculator.multiple(1,minusResult);
// const divideResult = calculator.divide(minusResult,multipleResult);
// const powerofResult = calculator.powerof(1,divideResult);


//    return a+b;

// //conditionals
// // const age = prompt("How old are you?");

// // console.log(age);
// // console.log(typeof age, typeof parseInt(age));

// const age = parseInt(prompt("How old are you?"));
// console.log(age);

// //Conditionals part Two
// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(isNaN(age)){
//     console.log("Please write a number");
// } else{
//     console.log("Thank you for writing you age.")
// }

// // Conditionals part Three
// const age = parseInt(prompt("How old are you?"));

// // if(isNaN(age)){
// //     console.log("Please write a number");
// // } else if(age<18){
// //     console.log("You are too young.");
// // }else {
// //     console.log("You can drink.");
// // }

// if(isNaN(age)){
//     console.log("Please write a number");
// } else if(age<18){
//     console.log("You are too young.");
// } else if(age>=18 && age <=50){
//     console.log("You are too young.");
// }else {
//     console.log("You can drink.");
// }


