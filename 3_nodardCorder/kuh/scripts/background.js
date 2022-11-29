const bgDiv = document.getElementById("bg");
const bgIndex = Math.floor(Math.random() * 2 + 1);
const imgEl = document.createElement("img");

imgEl.setAttribute("src", `./img/bg3${bgIndex}.jpg`);
bgDiv.appendChild(imgEl);
