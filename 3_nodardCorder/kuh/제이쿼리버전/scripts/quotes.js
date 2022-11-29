let quotes = [
  {
    quote: "Imagination is more important than knowledge",
    author: "Albert Einstein",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "A wise man will make more opportunities than he finds.",
    author: "Sir Francis Bacon",
  },
  {
    quote: "Do not turn back when you are just at the goa",
    author: "Publilius Syrus",
  },
  {
    quote: "Energy and persistence conquer all things",
    author: "Benjamin Franklin",
  },
  {
    quote: "Never leave that `till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },
];

const quote = $("div#quotes span:first-child");
const author = $("div#quotes span:last-child");

let index = Math.floor(Math.random() * quotes.length);
quote.text(quotes[index].quote);
author.text(quotes[index].author);
