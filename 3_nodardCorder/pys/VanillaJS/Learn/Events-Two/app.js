const title = document.querySelector("div.hello:first-child h1");

console.log(title);
title.innerHTML = "Hello";




function handleTitleClick(){
    title.style.color = "blue"
}

function handleMouseEnter(){
    title.innerText = "mouse here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);


title.addEventListener("mouseenter", handleMouseEnter);

title.addEventListener("mouseleave", handleMouseLeave);