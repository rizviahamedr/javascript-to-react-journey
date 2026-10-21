
console.log("Day 2 - Mini Project");

// 1. Create Array of Objects
const hvacServicesMain = [
  {
    name: "AC Repair",
    price: 150,
    available: true
  },
  {
    name: "Heating Repair",
    price: 250,
    available: true
  },
  {
    name: "AC Installation",
    price: 1200,
    available: false
  }
];

// 2. Add New Service
hvacServicesMain.push({
  name: "Maintenance",
  price: 200,
  available: true
});

// 3. Update AC Repair Price
hvacServicesMain[0].price = 180;

// 4. Show All Services
console.log("===== All HVAC Services =====");

for (let j = 0; j < hvacServicesMain.length; j++) {
  console.log("Service: " + hvacServicesMain[j].name);
  console.log("Price: " + hvacServicesMain[j].price);
  console.log("====================");
}

// 5. Check AC Installation Availability
console.log("===== Availability Check =====");

for (let j = 0; j < hvacServicesMain.length; j++) {
  if (hvacServicesMain[j].name === "AC Installation") {
    if (hvacServicesMain[j].available === true) {
      console.log("AC Installation is Available");
    } else {
      console.log("AC Installation is Not Available");
    }
  }
}

// 6. Function to Find Service Price
function getServicePrice(serviceName) {
  for (let k = 0; k < hvacServicesMain.length; k++) {
    if (hvacServicesMain[k].name === serviceName) {
      return hvacServicesMain[k].price;
    }
  }

  return "Service not found";
}

// 7. Test the Function
console.log("===== Service Price Check =====");

console.log(getServicePrice("AC Repair"));
console.log(getServicePrice("Heating Repair"));
console.log(getServicePrice("AC Installation"));
console.log(getServicePrice("Maintenance"));
console.log(getServicePrice("Unknown Service"));
