const bgDiv = $("#bg");
const bgIndex = Math.floor(Math.random() * 2 + 1);
const imgEl = $("<img/>");

imgEl.attr("src", `./img/bg3${bgIndex}.jpg`);
bgDiv.append(imgEl);
