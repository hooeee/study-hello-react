const title = document.querySelector("div.hello:first-child h1");

console.log(title);
title.innerHTML = "Hello";




function handleTitleClick(){
    title.style.color = "blue"
}

title.addEventListener("click", handleTitleClick);