// // // // variables
// // // //let, var, const

// // // // let name = "shampayne";

// // // // name = "vince";

// // // // console.log(name); // print to the console
// // // // //logs or prints whatever is put between " "
// // // // console.log("hello world");

// // // // can use "" '' `` to declare string

// // // // const name = "pizza";

// // // // console.log(name);

// // // // /* adding two strings;
// // // // concatenation*/

// // // // console.log(name, "pineapple");

// // // const name = "pizza";
// // // const topping = "pineapple";

// // // // template literals
// // // console.log(`${name} ${topping}`);

// // // console.log("string" + 32);

// // // console.log("32" + "100" + "str");

// // // //integer
// // // console.log(1 * 3);

// // // //booleans ------- false, undefined, null, 0
// // // let num = 1;

// // // console.log(Boolean(name));
// // // console.log(Boolean(num));

// // // // console.log(prompt1);

// // // // console.log(prompt1 + "str");

// // // let prompt1 = prompt("what is your name?");
// // // let howOldAreYou = prompt(`${prompt1}, how old are you?`);
// // // let whatIsYourHobby = prompt("what is your hobby?");

// // // console.log(`${prompt1} is ${howOldAreYou}, and like to ${whatIsYourHobby}`);

// // // alert(`${prompt1} is ${howOldAreYou}, and likes to ${whatIsYourHobby}`);

// // // // nav bar
// // // window.addEventListener("scroll", function () {
// // //   var header = document.querySelector("header");
// // //   header.classList.toggle("sticky", window.scrollY > 0);
// // // });

// // /////// conditionals ///////////////

// // // truthy values

// // let x = "1";
// // let y = "0";
// // console.log(Boolean(x));

// // // conditional operators
// // // === <- strict equal, 1===1 is true
// // // == <- loose equal, 1=='1', compares, could be true or false, checks if they are the same regardless of the data type
// // // <, >, !==(not eguals), <=, =>,
// // //more than or equal to

// // // 'collin' === 'collin'

// // //if statement

// // // if (this is true) {then run this}
// // // LOGICAL OPERATOR --> || && ??
// // // || or
// // // && and
// // // ?? nullish

// // // if ("1" === "1") {
// // //   console.log("hello world");
// // // }

// // if (x === "1" && y === "0") {
// //   console.log("hello world");
// // }

// // // OR OPERATOR
// // let i = 3;
// // let k = 2;

// // if (i === 0 || k === 2) {
// //   console.log("hello world");
// // }

// // // ELSE ; if the statement is false

// // let v = 10;
// // let u = 8;

// // if (v === 9) {
// //   console.log("hello world");
// // } else {
// //   console.log("good bye world");
// // }

// // let login = false;
// // if (login === true) {
// //   // redirect to page
// // } else {
// //   alert("user doesn't exist");
// // }

// // // else if
// // /* will run if conditions before it are false and specifies a new condition */

// // let q = 5;
// // if (q === 5) {
// //   console.log("hello world");
// // } else if (q === 5) {
// //   console.log("good bye world");
// // }

// // let user = "guest";

// // if (user === "admin") {
// //   // redirect to admin page
// // } else if (user === "user") {
// //   //redirect to user
// // } else {
// //   alert("user not found");
// // }

// // let username = prompt("enter your name");

// // if (username === "shamp") {
// //   alert("logged in!");
// // } else if (username === "lucy") {
// //   alert("logged in!");
// // } else {
// //   alert("no acount found");
// // }

// // let userName = prompt("enter your name")

// // if (userName === shamp || userName === leyanna){
// //     alert('logged in!')
// // } else {
// //   alert()
// // }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick"];

// console.log(arr[1]);
// console.log(arr[randomNumber]);
// console.log(arr[randomNumber] === "liv");

// if (arr[randomNumber] === "liv") {
//   console.log("hello world");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("whats popin");
// } else {
//   console.log("tech youre wrong");
// }

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);

// let prompt1 = prompt("Guess a number between 1 and 10");
// console.log(prompt1);

// if (randomNumber === prompt1) {
//   console.log("success");
// } else console.log("wrong");

///// extra practice //////

// //what is the number? the range is 10 and the order is random
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);
// // what is prompt1? what info do i want?
// let prompt1 = parseInt(prompt("guess a number between 1 and 10"));
// console.log(prompt1);
// // now that the info has been established...
// if (randomNumber === prompt1) {
//   console.log("success");
// } else {
//   console.log("wrong");
// }

//////

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let prompt1 = parseInt(prompt("Guess a number between 1 and 10"));
console.log(prompt1);

if (randomNumber === prompt1) {
  console.log("Success!");
} else {
  console.log("Wrong");
}
