console.log("HVAC Dashboard");

const services = [
  {
    id: 1,
    name: "AC Repair",
    price: 150,
    available: true
  },
  {
    id: 2,
    name: "AC Installation",
    price: 500,
    available: true
  },
  {
    id: 3,
    name: "Heating Repair",
    price: 200,
    available: false
  }
];

const printService = (services) => {
    
    const { name, price, available } = services;

    return `${name} | ${price} | ${available}`;

}

for ( let i = 0; i < services.length; i++ ) {
    console.log(printService(services[i]));
}

const updateServices = [

    ...services,
    {
        id: 4,
        name: "Maintenance",
        price: 100,
        available: true
    }
];

console.log(updateServices);


const calculateTota0l = (...prices) => {
    let total =0;

    for (let i = 0; i < prices.length; i++){
        total += prices[i];
    }

    return total;
}

console.log(calculateTota0l(150, 500, 200));


const countAvailable = (services) => {
  let count = 0;

  for (let i = 0; i < services.length; i++) {
    if (services[i].available === true) {
      
      count++;
    }
  }

  return count;
};

console.log(countAvailable(services));