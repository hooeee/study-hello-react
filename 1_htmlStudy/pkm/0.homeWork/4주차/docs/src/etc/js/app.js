const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const logoutForm=document.querySelector("#logout-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";
const NO_HIDDEN_CLASSNAME="no-hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    logoutForm.classList.add(NO_HIDDEN_CLASSNAME);
	paintGreeting();
}
function onLogoutSubmit(event) {
    event.preventDefault();
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.clear(USERNAME_KEY,loginInput.value);
    logoutForm.classList.remove(NO_HIDDEN_CLASSNAME);
   paintGreetingOut();
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`안녕하세요. ${username}님 환영합니다.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function paintGreetingOut(){
    greeting.classList.add(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
}
else{
	paintGreeting();
}

logoutForm.addEventListener("submit",onLogoutSubmit);

