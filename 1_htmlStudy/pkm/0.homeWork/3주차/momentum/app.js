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

//응용사용
const player ={
    name : "3dpit",
    sayHello : function(){
        console.log("Hello");
    },
};
console.log(player.name);
player.sayHello();