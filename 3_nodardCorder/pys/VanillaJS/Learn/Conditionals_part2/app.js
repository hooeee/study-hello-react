const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // isNaN : Null 이 맞는가?

if(isNaN(age)){
    // condition ==true
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age");
}