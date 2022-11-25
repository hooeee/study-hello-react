// //4.0 ~ 4.1
// const loginInput=document.querySelector("#login-form input");
// const loginButton=document.querySelector("#login-form button");

// // function onLoginBtnClick(){
// //     console.log(loginInput.value);
// //     console.log("Click!!");
// // }

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username===""){
//         alert("Please write your name");
//     }else if(username.length>15){
//         alert("Your name is too long.")
//     }
// }

// loginButton.addEventListener("click",onLoginBtnClick);

// //4.2
// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");

// function onLoginSubmit(info) {
//     info.preventDefault();
//     // const username = loginInput.value;
//     // console.log(username);
//     console.log(loginInput.value);
// }
// loginForm.addEventListener("submit",onLoginSubmit);

// //4.3

// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     // const username = loginInput.value;
//     // console.log(username);
//     console.log(loginInput.value);
// }

// function handleLinkClick(event){
//    	event.preventDefault;
//     console.log(event);
//     alert("Clicked");
// }

// loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// //4.4

// // const loginForm=document.querySelector("#login-form");
// // const loginInput=document.querySelector("#login-form input");

// // function onLoginSubmit(event) {
// //     event.preventDefault();
// //     const username = loginInput.value;
// //     loginForm.classList.add("hidden");
// //     console.log(username);
// // }

// // loginForm.addEventListener("submit",onLoginSubmit);


// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME ="hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     //greeting.innerText = "Hello" + username;
// 	greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit",onLoginSubmit);

// // 4.5
// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME ="hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem("username",username);
//     //greeting.innerText = "Hello" + username;
// 	greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit",onLoginSubmit);

// // 4.6
// // const loginForm=document.querySelector("#login-form");
// // const loginInput=document.querySelector("#login-form input");
// // const greeting = document.querySelector("#greeting");

// // const HIDDEN_CLASSNAME ="hidden";
// // const USERNAME_KEY ="username";

// // function onLoginSubmit(event) {
// //     event.preventDefault();
// //     loginForm.classList.add(HIDDEN_CLASSNAME);
// //     const username = loginInput.value;
// //     localStorage.setItem(USERNAME_KEY,username);
// //     //greeting.innerText = "Hello" + username;
// // 	greeting.innerText = `Hello ${username}`;
// //     greeting.classList.remove(HIDDEN_CLASSNAME);
// // }

// // const savedUsername = localStorage.getItem(USERNAME_KEY);

// // if(savedUsername === null){
// // 	loginForm.classList.remove(HIDDEN_CLASSNAME);
// //     loginForm.addEventListener("submit",onLoginSubmit);
// // }else{
// //     greeting.innerText=`Hello ${savedUsername}`;
// //     greeting.classList.remove(HIDDEN_CLASSNAME);
// // }

// //리팩토링
// const loginForm=document.querySelector("#login-form");
// const loginInput=document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME ="hidden";
// const USERNAME_KEY ="username";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY,username);
//     //greeting.innerText = "Hello" + username;
// 	paintGreeting(username);
// }

// function paintGreeting(username){
//         greeting.innerText=`Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }
// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
// 	loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit",onLoginSubmit);
// }else{
// 	paintGreeting(savedUsername);
// }

//4.7
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


