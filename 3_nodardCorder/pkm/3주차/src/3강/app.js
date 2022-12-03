// document

// console.dir(document);

// document.title;

// //3.1 HTML in Javascript
// const title = document.getElementById("title");

// console.dir(title);
// title.innerText = "Got you!";
// console.dir(title.id);
// console.dir(title.className);

// //3.2 Searching For Elements
// // const hellos = document.getElementsByClassName("hello");
// // console.log(hellos);

// // const title = document.getElementsByTagName("h1");

// // console.log(title)

// // //제일 처음꺼만
// // const title = document.querySelector(".hello h1");

// // console.log(title);

// //전부 다 가져오기
// const title = document.querySelectorAll(".hello h1");

// console.log(title);

// //3.3 Events
// // const title = document.querySelector("div.hello h1");
// // console.dir(title);
// // title.style.color="blue";

// const title = document.querySelector("div.hello h1");
//
// function handleTitleClick(){
//     //console.log("title was clicked");
//     title.style.color="blue";
// }
// title.addEventListener("click",handleTitleClick);

// //3.4 Events part Two
// const title = document.querySelector("div.hello h1");

// function handleTitleClick(){
//     //console.log("title was clicked");
//     title.style.color="blue";
// }
// title.addEventListener("click",handleTitleClick);

// function handleMouseEnter(){
//     // console.log("mouse is here!")
//     title.innerText = "Mouse is here!"
// }
// title.addEventListener("mouseenter",handleMouseEnter);

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!"
// }
// title.addEventListener("mouseleave",handleMouseLeave);

// //3.5 More Events
// const h1 = document.querySelector("div.hello h1");

// function handleTitleClick(){
//     //console.log("title was clicked");
//     h1.style.color="blue";
// }
// function handleMouseEnter(){
//     // console.log("mouse is here!")
//     h1.innerText = "Mouse is here!"
// }
// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!"
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier");
// }
// function handleWinodwOffline(){
//     alert("wifi off");
// }
// function handleWinodwOnline(){
//     alert("wifi on");
// }

// h1.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.addEventListener("mouseleave",handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);

// //3.6 CSS in Javascript
// // const h1 = document.querySelector("div.hello h1");
// // function handleTitleClick(){
// //     if(h1.style.color==="blue"){
// //         h1.style.color = "tomato";
// //     }else{
// //         h1.style.color ="blue";
// //     }
// // }
// // h1.addEventListener("click",handleTitleClick);

// const h1 = document.querySelector("div.hello h1");
// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor==="blue"){
//         newColor = "tomato";
//     }else{
//         newColor ="blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click",handleTitleClick);

// //3.7 CSS in Javascript part Two
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     if(h1.className==="active"){
//         h1.clasName = "";
//     }else {
//         h1.className ="active";
//     }
// }

// h1.addEventListener("click",handleTitleClick);

// //## 3.8 CSS in Javascript part Three
// // const h1 = document.querySelector("div h1");
// // function handleTitleClick(){
// //     const clickedClass = "clicked";
// //     if(h1.classList.contains(clickedClass)){
// //         h1.clasList.remove(clickedClass);
// //     }else {
// //         h1.classList.add(clickedClass);
// //     }
// // }

// // h1.addEventListener("click",handleTitleClick);
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click",handleTitleClick);