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

//4.3

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    // const username = loginInput.value;
    // console.log(username);
    console.log(loginInput.value);
}

function handleLinkClick(event){
   	event.preventDefault;
    console.log(event);
    alert("Clicked");
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);
