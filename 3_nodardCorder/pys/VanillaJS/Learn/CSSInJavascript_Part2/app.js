const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);
h1.innerHTML = "Hello";

function handleTitleClick(){
    const clickedClass ="clicked";
    if(h1.className === clickedClass){
        h1.className ="";
    }else{
        h1.className = clickedClass;
    }
    
}


h1.onclick = handleTitleClick;
