const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGrettings(username);
    // const userName = loginInput.value;
    // if(userName === ""){
    //     alert("Please write your name");
    // }else if(userName > 15){
    //     alert("Your name is too long");
    // }
    // event.preventDefault();
    // loginForm.classList.add(HIDDEN_CLASSNAME);

    //const username = loginInput.value;
    //localStorage.setItem(USERNAME_KEY, username)
    //greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGrettings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

// function handleLinkClick(event){
//     console.log(event);
//     event.preventDefault();
//     alert("clicked!");
// }

//loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    paintGrettings(savedUsername);
}