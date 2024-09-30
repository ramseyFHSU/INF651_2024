const vehicle = new Object();

vehicle.wheels = 4;
vehicle.doors = 4;
vehicle.color = "red";

console.log(vehicle);

const eVehicle = {
  wheels: 4,
  color: "blue",
  engine() {
    return "Vroom";
  },
};

const car = Object.create(eVehicle);
car.color = "black";
car.doors = 2;
car.engine = () => {
  return "silent";
};

for (key in car) {
  console.log(`${key} ${car[key]}`);
}

console.log(car.color);
console.log(eVehicle.color);
console.log(car.doors);
console.log(car.engine());

const person = {
  name: "John Doe",
  id: 4343,
};

let { name: otherName, id: otherId } = person;

console.log(otherName);
