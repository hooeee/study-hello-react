let quotes = [
  {
    quote: "집에 가고 싶다",
    author: "Kim Uihyeon.",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },
];

const quote = document.querySelector("div#quotes span:first-child");
const author = document.querySelector("div#quotes span:last-child");

let index = Math.floor(Math.random() * quotes.length);
quote.innerHTML = `오늘의 명언 | ${quotes[index].quote}`;
author.innerHTML = quotes[index].author;
