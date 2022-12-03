const quotes = [
    {
      quote: "꿈을 품고 뭔가 할 수 있다면 그것을 시작하라. 새로운 일을 시작하는 용기 속에 당신의 천재성과 능력과 기적이 모두 숨어 있다.",
      author: "괴테",
    },//
    {
      quote: "성공하기를 원하는가? 그렇다면 이미 개척해놓은 성공의 길이 아니라 그 누구도 가지 않는 새로운 길을 개척해야만 한다.",
      author: "로드 파머스턴",
    },
    {
      quote: "힘이 드는가? 하지만 오늘 걷지 않으면 내일은 뛰어야 한다.",
      author: "카를레스 푸욜",
    },
    {
      quote: "못할 것 같던 일도 시작해 놓으면 이루어진다.",
      author: "채근담",
    },
    {
      quote: "시작하는 방법은 그만 말하고 이제 행동하는 것이다.",
      author: "월트 디즈니",
    },
    {
      quote: "한 가지 뜻을 세우고, 그 길로 가라. 잘못도 있으리라. 실패도 있으리라. 그러나 다시 일어나서 앞으로 나아가라. 반드시 빛이 그대를 맞이할 것이다",
      author: "칸트",
    },
    {
      quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
      author: "크리스티 메튜슨",
    }
  ];

  const quote = document.querySelector("#quote-main span:first-child");
  const author = document.querySelector("#quote-main span:last-child");

  
const index = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[index];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

