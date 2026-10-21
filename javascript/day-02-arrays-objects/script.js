// what is Array?
// Array is a list of values.

const services = [
  "AC Repair",
  "AC Installation",
  "Maintenance",
  "Heating"
];

console.log(services[1]);
// AC Installation

console.log(services.length);
// 4

console.log(services[services.length - 1]);
// Heating

const product = [
  "Air conditioner",
  1500,
  true,
  null
];

console.log(product[0]);
// Air conditioner

// coding challenge

const hvacServices = [
  "AC Repair",
  "AC Installation",
  "Maintenance",
  "Heating",
  "Cooling"
];

console.log(hvacServices);


console.log(hvacServices[2]);
console.log(hvacServices[3]);

console.log(hvacServices.length);

// change the value of a service in the hvacServices array

hvacServices[2] = "AC Maintenance";
console.log(hvacServices);

// value add a new service to the hvacServices array

hvacServices.push("Dehumidifier");
console.log(hvacServices);


// remove a service from the hvacServices array 

hvacServices.pop();
console.log(hvacServices);

// unshift = add an element to the beginning of the array

hvacServices.unshift("HVAC Repair");
console.log(hvacServices);

// shift = remove an element from the beginning of the array

hvacServices.shift();
console.log(hvacServices);

// find the index of a service in the hvacServices array

console.log(hvacServices.indexOf("Heating"));

// includes is used to check if a service is in the hvacServices array

console.log(hvacServices.includes("Heating")); // true
console.log(hvacServices.includes("ac leaks")); // false



// what is Object?
// Object is a collection of key-value pairs.

const hvacService = {
  name: "AC Installation",
  price: 1200,
  available: true,
  category: "Cooling"
};

console.log(hvacService);

console.log(hvacService.price);

console.log(hvacService.available);

console.log(hvacService["category"]);

// object property update  

hvacService.price = 1500;
console.log(hvacService);

// add a new property to the hvacService object

hvacService.color = "White";
console.log(hvacService);

// remove a property from the hvacService object

delete hvacService.price;
console.log(hvacService);

// find the number of properties in the hvacService object

console.log(Object.keys(hvacService).length);

// Object-এর মধ্যে থাকা Function-কে Method বলে। 

const student = {
  name: "Rizvi",
  age: 24,


  resultDetails: function (){
    return this.name + " is " + this.age + " years old.";
  }

};

console.log(student.resultDetails());

// resultDetails is a method of the student object.

// this is a keyword that refers to the current object.

console.log(Object.keys(student));
console.log(Object.values(student));

// coding challenge

const hvacService1 = {
  name: "AC Installation",
  price: 1200,
  available: true,

  getDetails: function (){
    return this.name + " is " + this.price + " taka.";
  }
};

hvacService1.price = 1500;
hvacService1.category = "Cooling";
delete hvacService1.available;

console.log(hvacService1);

console.log(hvacService1.getDetails());

console.log(Object.keys(hvacService1));
console.log(Object.values(hvacService1));

// template literal

const name = "Rizvi";
const age = 24;

const sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence);

// array of objects

const products = [
  {
    name: "Air conditioner",
    price: 1500,
    available: true,
    category: "Cooling"
  },
  {
    name: "Heating",
    price: 1200,
    available: true,
    category: "Heating"
  }
];


products[1].price = 2000;
console.log(products[1].price);

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}

