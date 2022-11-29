const bgDiv = document.getElementById('bg');
const bgIndex = Math.floor((Math.random() * 3) +1);
const imgEl = document.createElement('img');

imgEl.setAttribute('src', `./img/bg${bgIndex}.jpg`)
bgDiv.appendChild(imgEl);