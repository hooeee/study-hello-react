## Chapter 2
### 2.0 Your First JS Project
웹 브라우저는 HTML을 열고 HTML은 CSS와 JS를 가져온다.
CSS는 HTML 상단에서 link를 걸어주고 JS는 HTML 하단에서 link를 걸어준다.
JS가 잘못되었다면 웹 브라우저의 검사 > 콘솔에서 Error가 발생하는걸 확인할 수 있다.

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
    <script src="script.js"></script>
</body>
</html>
```

- CSS
```css
body {
    background-color: beige;
}
```

- Javascript
```js
alert("hi");
```

### 2.2 Variables
JS 컨벤션은 카멜 케이스로 변수 작성한다.

- const : 숫자, 문자 모두 값으로 사용 가능
```js
const a = 5;
const b = 2;
const myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);
```

### 2.3 const and let
JS의 변수 선언 방법은 `const`, `let` 두 가지가 존재한다.
`const`는 값을 변경할 수 없고 `let`은 값 변경이 가능하다.
기본적으로 `const`를 사용하고 변경이 필요한 변수만 `let`을 사용한다.
>>>
`var`라는 변수도 있지만 변수의 사용 의도를 알 수 없기에 추천하지 않는다.
>>>

### 2.5 Arrays
`array` 안에는 숫자, 문자, `null`, `undefined` 모두 들어갈 수 있으며 섞어서도 사용 가능하다.

```js
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, thu, wed, thu, fri, sat, sun];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");
```

### 2.6 Objects
`object` 전체를 const로 지정했으므로 `object`의 `property`는 수정이 가능하나 전체 수정은 불가능하다.
`object`에 정의되지 않은 `property`를 추가하는것도 가능하다.

```js
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.lastName = "potato";
```

### 2.7 Functions part One
```js
function sayHello() {
    console.log("Hello");
}

sayHello();
sayHello();
sayHello();
sayHello();
```

### 2.8 Functions part Two
```js
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);


const player = {
    name: "nico",
    sayHello: function(otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};

console.log(palyer.name);
player.sayHello("lynn");
```

### 2.11 Returns
```js
const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
```

### 2.13 Conditionals
```js
const age = prompt("How old are you");

// variable type check & Convert To Int
console.log(typeof age, typeof parseInt(age));
```

### 2.14 Conditionals part Two
```js
const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
```

### 2.15 Conditionals part Three
```js
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}
```