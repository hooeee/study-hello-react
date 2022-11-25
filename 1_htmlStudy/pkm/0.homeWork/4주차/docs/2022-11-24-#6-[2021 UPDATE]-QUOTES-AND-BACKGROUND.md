---
title: #6 [2021 UPDATE] QUOTES AND BACKGROUND
date: 2022-11-24 20:37:00 +0900
category: JS
Draft: false
---

## 2022-11-24-#6-[2021 UPDATE]-QUOTES-AND-BACKGROUND

## 목차

## 6.0 Quotes 

```js
const quotes = [
  {
    quote: "명언1",
    author: "저자1",
  },//
  {
    quote: "명언1",
    author: "저자1",
  },
  {
    quote: "명언1",
    author: "저자1",
  },
  {
    quote: "명언1",
    author: "저자1",
  },    
];
```

- 위에 처럼 quotes.js파일을 만들어준다.

- html

  ```html
  <div id="quote">
    <span></span>
    <span></span>
  </div>
  ```

``` js
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*consle.log(quotes[Math.floor(Math.random() * 10)]);*/
const todayQuote = quotes[Math.floor(Math.random() * quote.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
```

- 소수점 업애기
  - Math.round()
  - Math.ceil()
  - Math.floor()
- 현재 10개만 동작하기에 10을 quote.length로 바꿔주자.

## 6.1 Background

- background.js

  ```js
  const images = ["0.jpeg","1.jpeg","2.jpeg"];
  const chosenImage = images[Math.floor(Math.random()*images.length)];
  ```

- html

  ```html
  <img src ="img/0.jpeg"/>
  ```

  - 이것을 자바스크립트로 생성해서 넣어주자

```js
const images = ["0.jpeg","1.jpeg","2.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);
```

## 6.2 Recap

- 여기서 배우는것 랜덤을 이용하는 방법
- 랜덤을 이용해서 특정 값을 봅아내는 방법에 대해서 배움
- 이미지의 경우는 자바스크립트에서 이미지 태그를 생성해서 하는 법을 배웠음
  - append의 경우 제일 뒤에
  - prepend는 가장 위에 오게 하는 것임