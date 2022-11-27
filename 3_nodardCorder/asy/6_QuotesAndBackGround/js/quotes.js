const quotes = [
    {
        quote: "quote1",
        author: "author1",
    },
    {
        quote: "quote2",
        author: "author2",
    },
    {
        quote: "quote3",
        author: "author3",
    },
    {
        quote: "quote4",
        author: "author4",
    },
    {
        quote: "quote5",
        author: "author5",
    },
    {
        quote: "quote6",
        author: "author6",
    },
    {
        quote: "quote7",
        author: "author7",
    },
    {
        quote: "quote8",
        author: "author8",
    },
    {
        quote: "quote9",
        author: "author9",
    },
    {
        quote: "quote10",
        author: "author10",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;