const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);
h1.innerHTML = "Hello";

function handleTitleClick(){
    console.log(h1.style.color);
    if(h1.style.color == "blue"){
        h1.style.color = "tomato";
    }else{
        h1.style.color = "blue"
    }
}


h1.onclick = handleTitleClick;
