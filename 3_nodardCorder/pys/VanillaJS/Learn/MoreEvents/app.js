const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);
h1.innerHTML = "Hello";

function handleTitleClick(){
    h1.style.color = "blue"
}

function handleMouseEnter(){
    h1.innerText = "mouse here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copy!")
}

function handleWindowOffline(){
    alert("offline!!!");
}

function handleWindowOnline(){
    alert("are Good!!!");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.mouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);