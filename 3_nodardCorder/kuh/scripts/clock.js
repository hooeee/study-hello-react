const clock = document.querySelector('h2#clock');

clock.innerHTML = 'test';


function getClock(){
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4, '0');
    const mounth = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDay()).padStart(2, '0');

    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    let dateString = `${year}/${mounth}/${day}`;
    let clockString = `${hour}:${minutes}:${seconds}`;
    clock.innerHTML =  `${dateString} ${clockString}`;
}

getClock();
setInterval(getClock, 1000);