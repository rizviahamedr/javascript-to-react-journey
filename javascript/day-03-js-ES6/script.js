console.log("Day 3 - Learning Started!");

// let কী?
// let ব্যবহার করে এমন Variable Declare করা হয়, যার Value পরে পরিবর্তন করা যাবে।

// const কী?
// const ব্যবহার করে এমন Variable Declare করা হয়, যার Value পরে পরিবর্তন করা যাবে।

// var কী?
// var ব্যবহার করে এমন Variable Declare করা হয়, যার Value পরে পরিবর্তন করা যাবে।

// let example
let servicePrice = 150;

console.log(servicePrice); // 150

servicePrice = 200;

console.log(servicePrice); // 200


// const example 
const pi = 3.14;
console.log(pi);


// Important: const দিয়ে Object বা Array তৈরি করলে তার ভেতরের Property বা Element পরিবর্তন করা যায়।

const service = {
  name: "AC Repair",
  price: 150
};

service.price = 200; // Allowed

console.log(service.price); // 200

// Scope কী?
// Scope নির্ধারণ করে একটি Variable Code-এর কোন জায়গা থেকে Access করা যাবে।

let price = 100;

if (price < 200) {
  let discount = 20;

  console.log(discount); // 20
}

// console.log(discount); // ReferenceError

// এখানে discount শুধু if Block-এর মধ্যে Access করা যাবে।

// Template Literal কী?
// JavaScript-এ Template Literal হলো String লেখার একটি Modern পদ্ধতি। এর মাধ্যমে String-এর মধ্যে Variable, Expression এবং একাধিক Line সহজে লেখা যায়।
// Template Literal লিখতে Backtick (`) ব্যবহার করা হয়, Single Quote বা Double Quote নয়।

const name = "Rizvi";
const age = 24;

const sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence);




// code challenge 

const hvacService = {
  name: "AC Installation",
  price: 1500,
  discount: 200,
  technician: "John"
};


console.log(`Service name: ${hvacService.name} and price: ${hvacService.price} and discount: ${hvacService.discount} so, final price is: ${hvacService.price - hvacService.discount} and technician: ${hvacService.technician}`);

const serviceDetails = `
Service: ${hvacService.name} 
Price: ${hvacService.price} taka
Discount: ${hvacService.discount} taka
Final Price: ${hvacService.price - hvacService.discount} taka
Technician: ${hvacService.technician}
`;

console.log(serviceDetails);



// Arrow Function কী?
// Arrow Function হলো JavaScript-এ একটি নতুন পদ্ধতি।

const calculatePrice = (price, quantity) => price * quantity;

console.log(calculatePrice(500, 3));





const calculateDiscount = (price, discount) => price - discount;

console.log(`${calculateDiscount(1500, 200)}`);


const checkService = (available) => {
    if (available === true) {
        return ("Available");
    } 
    
    return "Not available";
}
console.log(checkService(true));

const addTax = (price) => price += price * 0.1;


console.log(addTax(1000));



// Destructuring কী?
// Destructuring হলো JavaScript-এ একটি নতুন পদ্ধতি। যার মাধ্যমে Array বা Object থেকে Value বের করে সরাসরি Variable-এ Store করা যায়। const { name1, price1 } = service1;


// object
const service1 = {
  name1: "AC Repair",
  price1: 150,
  available1: true
};

const { name1, price1 } = service1;

console.log(name1);  // AC Repair
console.log(price1); // 150

// array 

const services2 = ["AC Repair", "Installation", "Maintenance"];

const [first, second, third] = services2;

console.log(first);  // AC Repair
console.log(second); // Installation
console.log(third);  // Maintenance


// variable renaming

const service02 = {
  name2: "AC Repair",
  price2: 150,
  available2: true
};

const { name2: serviceName01, price2: servicePrice02 } = service02;

console.log(serviceName01);  // AC Repair
console.log(servicePrice02); // 150



// 1. Spread Operator কী?
// Spread Operator ব্যবহার করে Array-এর Elements বা Object-এর Properties অন্য Array বা Object-এর মধ্যে ছড়িয়ে (Expand) দেওয়া যায়।

const services3 = ["AC Repair", "Installation", "Maintenance"];
const services4 = ["Heating Repair", "Heating Installation", "Heating Maintenance"];

const newService3 = [...services3, "Cooling"];


// marge all services
const allServices = [...newService3, ...services4];

console.log(allServices);
console.log("==================");

// object data update with spread operator

const serviceSpread = {
  name: "AC Repair",
  price: 150,
  available: true
};

const updatedServiceSpread = {
  ...serviceSpread,
  price: 200
};

console.log(updatedServiceSpread);


// 2. Rest Operator কী?
// Rest Operator ব্যবহার করে একাধিক Value একসঙ্গে একটি Array-তে সংগ্রহ করা যায়।

// Rest Operator আসলে কী করে?
// ধরো, তুমি HVAC-এর ৩টি Service-এর Price যোগ করতে চাও।
// const calculateTotal = (price1, price2, price3) => {
//   return price1 + price2 + price3;
// };

// console.log(calculateTotal(100, 200, 300)); // 600
// এখানে সমস্যা কী?
// যদি ৫টি বা ১০টি Price যোগ করতে চাও, তাহলে বারবার Function-এর Parameter পরিবর্তন করতে হবে।
// এই সমস্যার সমাধান হলো Rest Operator।


const calculateTotal = (...prices) => {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  return total;
};

console.log(calculateTotal(100, 200, 300, 400)); // 1000






// code challenge 

const services001 = ["AC Repair", "Heating Repair"];

const updatedServices001 = [...services001, "AC Installation"];

console.log(updatedServices001);

const hvacService001 = {
  name: "AC Repair",
  price: 150,
  available: true
};

const updatedHvacService001 = {
  ...hvacService001,
  price: 250
};

console.log(updatedHvacService001);

const cooling = ["AC Repair", "AC Installation"];
const heating = ["Furnace Repair", "Heating Maintenance"];

const coolingAndHeating = [...cooling, ...heating];

console.log(coolingAndHeating);


const calculateAll = (...price) =>{

  let total = 0;

  for (let i = 0; i < price.length; i++){
    total += price[i];
  }

  return total;
}

console.log(calculateAll(100, 200, 300));

// Default Parameters

// JavaScript-এ Function Call করার সময় কোনো Argument না দিলে সেই Parameter-এর জন্য আগে থেকে একটি Value নির্ধারণ করে রাখা যায়। এটাকেই বলে Default Parameter।

const calculatePrice001 = (price, tax = 0.10) => {
  return price + (price * tax);
};

console.log(calculatePrice001(1000, 0.10)); // 1100
console.log(calculatePrice001(1000));       // NaN (Not a Number)


const greetCustomer = (name = "Customer") => {
  return `Welcome, ${name}!`;
};

console.log(greetCustomer("John"));
// Welcome, John!

console.log(greetCustomer());
// Welcome, Customer!

const bookService = (
  serviceName = "AC Repair",
  technician = "Not Assigned",
  price = 150
) => {
  return `${serviceName} - ${technician} - $${price}`;
};

console.log(bookService());
// AC Repair - Not Assigned - $150

console.log(bookService("AC Installation", "John", 500));
// AC Installation - John - $500
