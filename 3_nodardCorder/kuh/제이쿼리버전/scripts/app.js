let input = $("#input");
let form = $("#form");
let greeting = $("#greeting");
let todosEl = $("#todos");
let accountLoginBox = $(".account-state-login");
let accountLogoutBox = $(".account-state-logout");

const HIDDEN_STYLE_CLASS_NAME = "hidden";
const STORAGE_USER_NAME_KEY = "userName";

function checkLogin() {
  return localStorage.getItem(STORAGE_USER_NAME_KEY) === null ? false : true;
}

function submitHandle(event) {
  event.preventDefault();
  localStorage.setItem(STORAGE_USER_NAME_KEY, input.value());
  login(value);
  input.value("");
}

function login(value) {
  greeting.text(`Hello~! ${value}!`);
  form.addClass(HIDDEN_STYLE_CLASS_NAME);
  todosEl.removeClass(HIDDEN_STYLE_CLASS_NAME);
  accountLoginBox.removeClass(HIDDEN_STYLE_CLASS_NAME);
  accountLogoutBox.addClass(HIDDEN_STYLE_CLASS_NAME);
}

function logout() {
  greeting.text(`Hello~!`);
  form.removeClass(HIDDEN_STYLE_CLASS_NAME);
  todosEl.addClass(HIDDEN_STYLE_CLASS_NAME);
  accountLoginBox.addClass(HIDDEN_STYLE_CLASS_NAME);
  accountLogoutBox.removeClass(HIDDEN_STYLE_CLASS_NAME);
}

function browserInit() {
  let savedUserName = localStorage.getItem(STORAGE_USER_NAME_KEY);
  if (savedUserName === null) logout();
  else login(savedUserName);
}

form.on("submit", submitHandle);
// form.addEventListener("submit", submitHandle);
browserInit();
