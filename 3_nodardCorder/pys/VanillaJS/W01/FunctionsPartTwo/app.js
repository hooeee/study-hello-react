function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}



plus(1, 2);

divide(80, 20);


const player = {
    name: "bak",
    sayHello : function(otherPersonName) {
        console.log("helo! " + otherPersonName + " nice to meet you") ;
    }
};
console.log(player.name);
player.sayHello("nico");