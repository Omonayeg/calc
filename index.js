// // for 1
// var one = document.querySelector(".one");
// const ONE = 1;

// one.addEventListener("click", function () {
//     document.querySelector("p").innerHTML += ONE;
// });

// // for 2
// var two = document.querySelector(".two")
// const TWO = 2;

// two.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += TWO;
// });

// // for 3
// var three = document.querySelector(".three");
// const THREE = 3;

// three.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += THREE;
// });

// // for 4
// var four = document.querySelector(".four");
// const FOUR = 4;

// four.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += FOUR;
// });

// // FOR 5
// var five = document.querySelector(".five");
// const FIVE = 5;

// five.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += FIVE;
// });

// // for 6
// var six = document.querySelector(".six");
// const SIX = 6;

// six.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += SIX;
// });

// // for 7
// var seven = document.querySelector(".seven");
// const SEVEN = 7;

// seven.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += SEVEN;
// });

// // for 8
// var eight = document.querySelector(".eight");
// const EIGHT = 8;

// eight.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += EIGHT;
// });

// // for 9
// var nine = document.querySelector(".nine");
// const NINE = 9;

// nine.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += NINE;
// });

// // for 0
// var zero = document.querySelector(".zero");
// const ZERO = 0;

// zero.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += ZERO;
// });

// // for DOT
// var dot = document.querySelector(".dot");

// dot.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += ".";
// });



// // FOR OPERATORS

// // for addition
// var add = document.querySelector(".add");

// add.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += "+";
// });

// // for subtraction
// var minus = document.querySelector(".minus");

// minus.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += "-";
// });

// // for multiplication
// var multiply = document.querySelector(".multiply");

// multiply.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += "*";
// });

// // for division
// var divide = document.querySelector(".divide");

// divide.addEventListener("click", function() {
//     document.querySelector("p").innerHTML += "/";
// });



// for Numbers and Operators
let value;

var btn = document.querySelectorAll("button");

btn.forEach(btn => btn.addEventListener ("click", (e) => {
    value = e.target.id;
    document.querySelector("p").innerHTML += value;
}));


// for delete
var del = document.querySelector(".del");
var paraContent = document.querySelector("p");

del.addEventListener("click", function() {
    if (paraContent.innerText) {
        paraContent.innerText =  paraContent.innerText.slice(0, -1);
    }
});

// // for reset
var reset = document.querySelector(".reset");

reset.addEventListener("click", function() {
    document.querySelector("p").innerHTML = '';
});

// for Equals
var equals = document.querySelector(".equals");

equals.addEventListener("click", function() {
    var problem = document.querySelector("p").innerHTML;
    var answer = eval (problem);

    document.querySelector("p").innerHTML = answer;
});


