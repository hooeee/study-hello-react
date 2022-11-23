const a = 5;
const isBakFat = true;
//isBakFat = false;

// var는 사용하면 안된다. 상수인지 변수인지 구분이 불가능하다.
var isNicoFat = true;
isNicoFat = false;

console.log(a);

const tempTrue = true; // true or false

const tempNull = null // 비어있다.

let hello; // undefined 정의 되지 않았다.

const me = "sexy";
const tempArrays = [1, true, null, undefined, "text", me];

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy[2]);


const player = {
    name: "bak",
    age : 98,
};
console.log(player.name);
player.name = "yeongseok"
console.log(player.name);
player.sexy = true;
console.log(player);

function plus(potato, salad){
    console.log(potato + salad);
};

plus(5, 10);
plus(1.33434, 989);
plus("aaa","bbb");
plus(1.33, "text");
plus(1,2,3,4,5,); // argument가 많아도 선언된 파라미터 개수만 받는다.

