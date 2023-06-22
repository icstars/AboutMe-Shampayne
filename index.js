// variables
//let, var, const

// let name = "shampayne";

// name = "vince";

// console.log(name); // print to the console
// //logs or prints whatever is put between " "
// console.log("hello world");

// can use "" '' `` to declare string

// const name = "pizza";

// console.log(name);

// /* adding two strings;
// concatenation*/

// console.log(name, "pineapple");

const name = "pizza";
const topping = "pineapple";

// template literals
console.log(`${name} ${topping}`);

console.log("string" + 32);

console.log("32" + "100" + "str");

//integer
console.log(1 * 3);

//booleans ------- false, undefined, null, 0
let num = 1;

console.log(Boolean(name));
console.log(Boolean(num));

let prompt1 = prompt("what is your name?");
let howOldAreYou = prompt(`${prompt1}, how old are you?`);
let whatIsYourHobby = prompt("what is your hobby?");
// console.log(prompt1);

// console.log(prompt1 + "str");
console.log(`${prompt1} is ${howOldAreYou}, and like to ${whatIsYourHobby}`);

alert(`${prompt1} is ${howOldAreYou}, and likes to ${whatIsYourHobby}`);

// nav bar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
