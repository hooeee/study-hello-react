## Chapter 3
### 3.1 HTML in Javascript
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <h1 id="title">Grab me!</h1>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const title = document.getElementById("title");

title.innerText = "Got you!";
```

### 3.2 Searching For Elements
`querySelector`는 element를 CSS 방식으로 검색할 수 있다.
`querySelector`는 단 하나의 element를 `return`한다. 여러개가 존재할 시 첫 번째 element를 `return`한다.
`querySelectorAll`는 array를 `return`한다.

- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Grab me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const title = document.querySelector(".hello h1");

console.log(title);
```

### 3.3 Events
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
```

### 3.4 Events part Two
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

### 3.5 More Events
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

### 3.6 CSS in Javascript
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- Javascript
```js
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
```

### 3.7 CSS in Javascript part Two
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- CSS
```css
body {
    background-color: beige;
}

h1 {
    color: cornflowerblue;
    transition: color 0.5s ease-in-out;
}

.clicked {
    color: tomato;
}
```

- Javascript
```js
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
```

### 3.8 CSS in Javascript part Three
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum</title>
</head>
<body>
    <div class="hello">
        <h1 class="sexy-font">Click me!</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- CSS
```css
body {
    background-color: beige;
}

h1 {
    color: cornflowerblue;
    transition: color 0.5s ease-in-out;
}

.clicked {
    color: tomato;
}

.sexy-font {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

- Javascript
```js
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
```