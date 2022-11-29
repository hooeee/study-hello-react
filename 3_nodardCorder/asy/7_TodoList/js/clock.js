const clock = document.querySelector("h2#clock");

//// 5.0 Intervals
// function sayHello(){
//     console.log("hello");
// }

// setInterval(() => {
//     sayHello();
// }, 5000);
// setInterval(sayHello, 5000);

// setTimeout(() => {
//     sayHello();
// }, 5000);

// setTimeout(sayHello, 5000);

//// 5.1 Timeouts and Dates
// function getClock(){
//     const date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// getClock();
// setInterval(getClock, 1000);

//// 5.2 PadStart

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);