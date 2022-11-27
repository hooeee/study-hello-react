const quotes = [
    {
        qutoe : "The way th get started is to quit",
        author: "Walt Disney"
    },
    {
        qutoe : "The way th get started is to quit2",
        author: "Walt Disney2"
    },
    {
        qutoe : "The way th get started is to quit3",
        author: "Walt Disney3"
    },
    {
        qutoe : "The way th get started is to quit4",
        author: "Walt Disney4"
    },
    {
        qutoe : "The way th get started is to quit5",
        author: "Walt Disne5"
    },
    {
        qutoe : "The way th get started is to quit6",
        author: "Walt Disne6"
    },
    {
        qutoe : "The way th get started is to quit7",
        author: "Walt Disne7"
    },
    {
        qutoe : "The way th get started is to quit8",
        author: "Walt Disne8"
    },
    {
        qutoe : "The way th get started is to quit9",
        author: "Walt Disne9"
    },
    {
        qutoe : "The way th get started is to quit10",
        author: "Walt Disne10"
    },
];

const quote = document.querySelector("#qutoe span:first-child");
const author = document.querySelector("#qutoe span:last-child");
const todaysQutoe = quotes[Math.floor(Math.random() * quotes.length)];

console.log(quotes[Math.floor(Math.random() * quotes.length)])

quote.innerHTML = todaysQutoe.qutoe;
author.innerHTML = todaysQutoe.author;