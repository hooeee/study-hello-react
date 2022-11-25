//// HTML in Javascript
// const title = document.getElementById("title");
// console.dir(title);
// title.innerHTML = "got u";

//// Searching For Elements
// const hello = document.getElementsByClassName("hello");
// console.log(hello);

// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");
// console.log(title);

//// Events 
// const title = document.querySelector("div.hello h1");

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleMouseEnter() {
//     title.style.color = "red";
//     title.innerHTML = "mouse in here"
// }

// function handleMouseLeave() {
//     title.style.color = "blue";
//     title.innerHTML = "mouse in gone"
// }

// function handleWindowCopy() {
//     alert("copy");
// }

// function handleWindowOffLine() {
//     alert("off");
// }

// function handleWindowOnLine() {
//     alert("on");
// }


// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);

//// CSS in Javascript
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     if(h1.style.color === "blue"){
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
// }

// function handleTitleClick(){
//     if(h1.className === "active"){
//         h1.className = "";
//     }else{
//         h1.className = "active";
//     }
// }

// function handleTitleClick(){
//     const clickedClass = "active";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }

function handleTitleClick(){
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);