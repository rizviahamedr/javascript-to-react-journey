console.log("Hello JavaScript!");
console.log("Day 1 - Learning Started!");


// let is a variable that holds a value. It can be changed.
// var is a variable that holds a value. It can be changed.

let price = 10;
price = 20;

console.log(price);

var name = "John";

name = "donald";
console.log(name);

// const is a variable that holds a value. It cannot be changed.

const age = 30;

// age = 40; // this will throw an error
console.log(age);

// show data type
console.log(typeof price);
console.log(typeof name);
console.log(typeof age);

// template literal

const name1 = "Rizvi";
const age1 = 24;

const sentence = `My name is ${name1} and I am ${age1} years old.`;
console.log(sentence);

// - day 1 - coding challenge

let number1 = 1000;
number1 = 1500;

console.log(number1);

const websitename = "Google";
console.log(websitename);


let carprice = 4500;
let message;

if (carprice > 1000) {
  message = "expensive";
} else {
   message = "cheap";
}

console.log(message);

// data type 

let product = "book"; 
let productPrice = 10;
let productInStock = true;
let productRating = 4.5;
let productReview = null;
let productCategory = undefined;
let discount

console.log(typeof product); 
// String
console.log(typeof productPrice);
// Number
console.log(typeof productInStock);
// Boolean
console.log(typeof productRating);
// Number
console.log(typeof productReview);
// Object
console.log(typeof productCategory);
// Undefined
console.log(typeof discount);
// Undefined

// --- JavaScript Operators ---

// #	Operator Type	Example
// 1	Arithmetic	    +, -, *, /, %, **
// 2	Assignment	    =, +=, -=, *=, /=
// 3	Comparison	    ==, ===, !=, >, <
// 4	Logical	        &&, \|\|, !
// 5	String	        +, +=
// 6	Conditional     (Ternary)	? :
// 7	Type	        typeof, instanceof
// 8	Bitwise	        &, \|, ^, ~, <<, >>

// example of arithmetic operators

let a = 10; 
let b = 5;  
let c = a + b;  
console.log(c); 
// 15   
let d = a**b;
console.log(d);
// 100000
let e = a%b;
console.log(e);
// 0

// example of assignment operators

let x = 10;
let y = 5;
x += y; // x = x + y
console.log(x);
// 15
x -= y; // x = x - y
console.log(x);
// 10
x *= y; // x = x * y
console.log(x);
// 50
x /= y; // x = x / y
console.log(x);
// 2.5
x %= y; // x = x % y
console.log(x);
// 2.5

// example of comparison operators

let num1 = 10;
let num2 = 5;
console.log(num1 == num2); // value comparison answer is false
console.log(num1 === num2); // value + type comparison answer is false

console.log(10 == "10");  // true
console.log(10 === "10"); // false

console.log(num1 != num2); // not equal answer is true
console.log(num1 > num2); // getter answer is true
console.log(num1 < num2); // lesser answer is false
console.log(num1 >= num2); // greater or equal answer is true
console.log(num1 <= num2); // lesser or equal answer is false


// example of logical operators 

// && → AND (দুইটি condition-ই true হতে হবে)
// || → OR (অন্তত একটি true হতে হবে)
// ! → NOT (true-কে false, false-কে true করে)

let logical_a = true;
let logical_b = false;
console.log(logical_a && logical_b); // false
console.log(logical_a || logical_b); // true
console.log(!logical_a); // false

// example of string operators  

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); // Hello World   
str1 += " " + str2;
console.log(str1); // Hello World
str1 += "!";
console.log(str1); // Hello World!


// example of conditional operators

let person_age = 18;
let canVote = person_age >= 18 ? "Yes" : "No";
console.log(canVote);


// example of type operators

let value1 = "Hello";
let value2 = 10;
console.log(typeof value1); // string
console.log(typeof value2); // number

// instanceof

let obj1 = new Object();
let obj2 = {};
console.log(obj1 instanceof Object); // true
console.log(obj2 instanceof Object); // true


// example of bitwise operators (not important)

let bit1 = 10;
let bit2 = 5;
let result1 = bit1 & bit2;
let result2 = bit1 | bit2;
let result3 = bit1 ^ bit2;
let result4 = ~bit1;
let result5 = bit1 << 2;
let result6 = bit1 >> 2;
console.log(result1); // 0
console.log(result2); // 15
console.log(result3); // 15
console.log(result4); // -11
console.log(result5); // 40
console.log(result6); // 2

// cooding challenge

let laptop_price = 45000;
let quantity = 2;
let laptop_discount = 5000;

let total_price = laptop_price * quantity;
let final_price = total_price - laptop_discount;

console.log(final_price); // 85000

console.log(final_price > 80000);    // true
console.log(final_price === "85000"); // false


// condition code

let temperature = 10;

if (temperature >= 35) {
  console.log("Very Hot");
} else if (temperature >= 25 && temperature <= 34) {
  console.log("Wram");
}  else if (temperature >= 24 && temperature <= 15) {
  console.log("Cool");
} else {
  console.log("cold");
}

let temperature2 =20;
let hot = temperature2  >= 25 ? "Hot" : "Not hot";
console.log(hot);

// loop code

// what is loop?
// A loop is a sequence of instructions that is repeated until a certain condition is met.
// how many loops?
// There are three types of loops in JavaScript:
// 1. for loop 
// 2. while loop
// 3. do-while loop

// for loop

for (let i = 1; i <= 10; i++){
  console.log(i);
}

// while loop
let j = 0;
while (j <=10 ){
  console.log(j);
  j++;
}

// do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

console.log("============");
// do while condition false but one time run


// coding challenge

for (let i = 1; i <=20 ; i++){
  if (i % 2 === 0){
    console.log(i);
  }
}

let while_loop = 10;

while (while_loop >=1){
  console.log(while_loop);
  while_loop--;
}

let do_while_loop = 5;
do{
  console.log(do_while_loop);
  do_while_loop--;
} while (do_while_loop >= 1);


console.log("============");



// Function হলো একটি reusable code block। একই কাজ বারবার লেখার পরিবর্তে Function তৈরি করে প্রয়োজনমতো call করা যায়।
// 1. Parameter কী?
// Function তৈরি করার সময় ()-এর ভেতরে যে variable লেখা হয়, তাকে Parameter বলে।
// 2. Argument কী?
// Function call করার সময় যে actual value পাঠানো হয়, তাকে Argument বলে।
function greet(name) {
  console.log("Hello " + name);
}

greet("Rizvi"); // Hello Rizvi
greet("Rahim"); // Hello Rahim

function calculatePrice(price, quantity) {
  return price * quantity;
}

let total = calculatePrice(500, 3);

console.log(total); // 1500

// arrow function

const calculatePrice2 = (price, quantity) => {
  return price * quantity;
};
let total2 = calculatePrice2(500, 2);

console.log(total2); // 1500


const multiply = (one , two) => {
  return one * two
}

console.log(multiply(2, 3));

// coding challenge


function greetUser (name) {
    return "Hello " + name;
}
console.log(greetUser("Rizvi"));



function addNumbers(a, b){
  return a + b;
}
console.log(addNumbers(3, 4));

function calculateDiscount (price, discount){
    let totalPrice = price - discount;

    return totalPrice
}

console.log("Total Price: " + calculateDiscount(100, 20));

const square = (borgo) => {
  return borgo * borgo;
}
console.log(square(4));

//----- more short ---

//  const square = number => number * number;

// console.log(square(4)); // 16


function calculateServicePrice (service, quantity) {
  let price = 0;
  
  if (service === "repair"){
    price = 100;
  } else if (service === "maintenance"){
    price = 200;
  } else if (service === "installation"){
    price = 300;
  }

  let totalPrice = price * quantity;


  if (totalPrice >= 1000){
    totalPrice = totalPrice - (totalPrice * 0.1);
  }

  return totalPrice
}
console.log(calculateServicePrice("installation", ));