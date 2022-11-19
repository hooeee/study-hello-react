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