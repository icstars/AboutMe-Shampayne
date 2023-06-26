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

// //////

// // let randomNumber = Math.floor(Math.random() * 10) + 1;
// // console.log(randomNumber);

// // let prompt1 = parseInt(prompt("Guess a number between 1 and 10"));
// // console.log(prompt1);

// // if (randomNumber === prompt1) {
// //   console.log("Success!");
// // } else {
// //   console.log("Wrong");
// // }

// /// loops /////

// // variables and data types
// let myName = "shamp";
// console.log(myName);
// console.log(typeof myName);

// //conditionals
// if (myName === "shamp") {
//   console.log(`hello ${myName}`);
// } else {
//   console.log(false);
// }

// // for
// for (let i = 0; i < 10; i++) {}
// //
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // arrays and methods
// let team = ["lucy", "collin", "mark", "cortez"];
// console.log(team);
// console.log(team.length);

// // push
// console.log(team.push("leyanna", "derrick"));
// console.log(team);

// // pop
// console.log(team.pop());
// console.log(team);

// // join
// console.log(team.join("A"));
// // "A" <-- instead of an "," you can use anything

// // slice returns a new array
// console.log(team);
// console.log(team.slice(0, 3));

// // Split
// let team1 = "john,mike, kierstin, lucy";
// console.log(team1);
// let team1Split = team1.split(",");
// console.log(team1Split);

// // looping thru an array
// console.log(team);
// console.log(team[3]);

// let roles = [
//   "tech Manager",
//   "techFello",
//   "placement manager",
//   "program manager",
//   "intern",
// ];

// for (let i = 0; i < team.length; i++) {
//   console.log(i);
//   console.log(`hello my name is ${team[i]} and i am a ${roles[i]}`);
// }
// // hi my name is lucy and i am the tech manager

// console.log(team);
// for (let i = 0; i < team.lenghts; i++) {
//   console.log(i);
// }

// console.log(team);
// for (let i = 0; i < team.lenghts; i++) {
//   console.log(team[i]);
// }

// console.log(team);
// for (let i = 0; i < team.lenghts; i++) {
//   console.log(`hello ${team[i]}`);
// }

////// challenge /////
/// using only what we have learned thus far, working with prompts, at least
/// enter your team's names and roles in your prompt(s)
/// populate those values in an array[s]
/// write a for loop that logs: "hello my name is <name> and i am the <roles>"
/// you must get a log for every team member/

// for (let i = 0; i < numRoles; i++) {
//   const name = prompt(`enter the name of your team members`);
//   const role = prompt(`enter the roles of your team members`);
//   teamName.push(name);
//   teamRoles.push(role);
// }

// for (let i = 0; i < teamNames.length; i++) {
//   const name = teamNames[i];
//   const role = teamRoles[i];
//   console.log(`hello, my name is ${name} and i am the ${role}`);
// }

////// 6/26/23 overview //////

// for loop...   (LET initializer  ;   condition  ;  iterator)

// for (let initializer = 0;initializer < 5; initializer++) {
//   console.log(`hello world`)
// }

// ////
// const arr = [1,2,3,4]
// console.log(arr[2]) // 3

// for (let initializer = 0;initializer < 5; initializer++) {
//   console.log(arr[initializer])

// const arr = [1,2,3,4,5,6,7,8,3,2,1,3,2,1,2]

//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer])
//   }

//ANCHOR - javascript functions

//   //
//   function thisIsTheFunctionName(name) {
//     // replace console.log(name) with ....
//     return name
//   }

//   // to activate
// // TYPE THE FUNCTION NAME FOLLOWED BY PARENTHESIS
// thisIsTheFunctionName(`collin`) // inside the parenthesis is the argument

// // RETUEN STATEMENT

// // const name =

// ///

// let array2 = [1, 2, 3, 4, 5, 6];
// // let array3 = [1, 2, 3, 4, 5, 6];
// // let array4 = [1, 2, 3, 4, 5, 6];
// // let array5 = [1, 2, 3, 4, 5, 6];
// // let array6 = [1, 2, 3, 4, 5, 6];
// // let array7 = [1, 2, 3, 4, 5, 6];

// // function iterateThroughArray(arr) {
// //   for (let initializer = 0; initialezer < arr.length; initializer++) {
// //     console.log(arr[initializer]);
// //   }
// // }
// // iterateThroughArray(array3);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(1, 3);

// ///
// function helloWorld() {
//   console.log(`hello world`);
// }
// helloWorld();

// // ///
// // function pho(ingredient1, ingredient2) {
// //   console.log(ingredient1 / ingredient2)
// // }

// // //
// // const function1 = function() {

// // }
// // // arrow function
// // const function2 = () => {

// // }

// ///// practice

// let array10 = [1, 2, 3, 4, 5];

// const function21 = function (arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer]);
//   }
// };

// function21(array10);

// // real world example

// let users = ['collin', 'vince', 'haylee']

// userinput = prompt('what is your username')

// /////// assignment ///////
// loop()

function blockScope() {
  let x = 0; // you CANT access in GLOAL SCOPE
  console.log(x);
}
blockScope();

// ////
let array10 = [1, 2, 3, 4, 5];

const function21 = function (arr) {
  for (let initializer = 0; initializer < arr.length; initializer++) {
    console.log(arr[initializer]);
  }
};

function21(array10);

///CHALLENGE
// let team = ["Lucycan", "Collin", "Mark", "Cortez"]; ///this array needs to be in block scope not global scope
///create a function that passes another name as an argument to the function parameter
/// the function adds the name that you passed to the array
/// return the array
/// expected output: ["Lucycan", "Collin", "Mark", "Cortez", "Blanca"]

function replaceTeamMember(item1) {
  let team9 = ["Lucycan", "Collin", "Mark", "Cortez"];
  console.log(item1);
  console.log(team9.push(item1));

  console.log(team9);
  console.log;

  for (let i = 0; i < team9.length; i++) {
    console.log(team9[i]);
  }
}
replaceTeamMember("Blanca");
