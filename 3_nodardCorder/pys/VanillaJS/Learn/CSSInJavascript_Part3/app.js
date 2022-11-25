const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);
h1.innerHTML = "Hello";

function handleTitleClick(){
    const clickedClass ="clicked";
    h1.classList.toggle(clickedClass);
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    
}


h1.onclick = handleTitleClick;
