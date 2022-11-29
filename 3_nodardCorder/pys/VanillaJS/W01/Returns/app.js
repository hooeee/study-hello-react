const calculator = {
    plus: function (a, b){
        console.log(a + b);
    },
    minus: function (a, b){
        console.log(a - b);
    },
    times: function (a, b){
        console.log(a * b);
    },
    divide: function (a, b){
        console.log(a / b);
    },
    power: function (a, b){
        console.log(a ** b);
    },
};


calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.divide(2,3);
calculator.power(2,3);

////////// Returns
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const returnCalculator = {
    plus: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function (a, b){
         return a / b;
    },
    power: function (a, b){
        return a ** b;
    },
};


console.log(returnCalculator.plus(2,3));
console.log(returnCalculator.minus(2,3));
console.log(returnCalculator.times(2,3));
console.log(returnCalculator.divide(2,3));
console.log(returnCalculator.power(2,3));