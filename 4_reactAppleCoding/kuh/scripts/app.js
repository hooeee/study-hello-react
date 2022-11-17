let input = document.querySelector("#input");
let form = document.querySelector("#form");
let accountLoginBox = document.querySelector(".account-state-login");
let accountLogoutBox = document.querySelector(".account-state-logout");

const HIDDEN_STYLE_CLASS_NAME = "hidden";
const STORAGE_USER_NAME_KEY = "userName";

function checkLogin() {
    return localStorage.getItem(STORAGE_USER_NAME_KEY) === null ? false : true;
}

function submitHandle(event) {
    event.preventDefault();
    let value = input.value;
    localStorage.setItem(STORAGE_USER_NAME_KEY, value);
    login(value);
    input.value = "";
}

function login(value) {
    form.classList.add(HIDDEN_STYLE_CLASS_NAME);
    accountLoginBox.classList.remove(HIDDEN_STYLE_CLASS_NAME);
    accountLogoutBox.classList.add(HIDDEN_STYLE_CLASS_NAME);
}

function logout() {
    console.log("tt");
    form.classList.remove(HIDDEN_STYLE_CLASS_NAME);
    accountLoginBox.classList.add(HIDDEN_STYLE_CLASS_NAME);
    accountLogoutBox.classList.remove(HIDDEN_STYLE_CLASS_NAME);
}

function browserInit() {
    let savedUserName = localStorage.getItem(STORAGE_USER_NAME_KEY);
    if (savedUserName === null) logout();
    else login(savedUserName);
}

form.addEventListener("submit", submitHandle);
browserInit();
