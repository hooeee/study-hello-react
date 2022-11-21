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
const title = document.querySelector("div.hello h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.style.color = "red";
    title.innerHTML = "mouse in here"
}

function handleMouseLeave() {
    title.style.color = "blue";
    title.innerHTML = "mouse in gone"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


