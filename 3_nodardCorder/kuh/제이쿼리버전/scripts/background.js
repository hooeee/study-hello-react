const bgDiv = $("#bg");
const bgIndex = Math.floor(Math.random() * 3 + 1);
const imgEl = $("<img/>");

imgEl.attr("src", `./img/bg${bgIndex}.jpg`);
bgDiv.append(imgEl);
