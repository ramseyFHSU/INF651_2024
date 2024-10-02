// Before ES6
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let john = new Person("john doe");
console.log(john.getName());

// After ES6
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

let square = new Rectangle(10, 10);
console.log(square.calcArea());

// Pizza Example
class Pizza {
  constructor(pizzaType, pizzaSize) {
    (this.pizzaType = pizzaType),
      // (this.size = "Medium"),
      (this.size = pizzaSize),
      (this.crust = "Original"),
      (this.toppings = []);
  }
  // getter - gives access to the properties
  get pizzaCrust() {
    return this.crust;
  }
  // setter - changes/mutate properties
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(toppings) {
    this.toppings.push(toppings);
  }

  // Method
  bake() {
    console.log(
      `Baking a ${this.size} size pizza with a ${this.crust} ${this.pizzaType} crust`
    );
  }
}

const myPizza = new Pizza("cheese", "small");
myPizza.bake();
myPizza.pizzaCrust = "traditional";
console.log(myPizza.pizzaCrust);
myPizza.bake();
myPizza.setToppings("Peperoni");
myPizza.setToppings("olives");
myPizza.setToppings("onions");
console.log(myPizza.getToppings());

// Inheritance
class Pizza2 {
  crust = "Original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    // (this.size = pizzaSize), (this.crust = "Original");
    //Private syntax this._size = pizzaSize;
    this.#size = pizzaSize;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(toppings) {
    this.toppings.push(toppings);
  }
  order() {
    console.log(
      `Your order is ${this.#size} size ${this.crust} crust with ${this.#sauce}`
    );
  }
}

class SpecialtyPizza extends Pizza2 {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The Special";
  }

  slice() {
    console.log(
      `Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`
    );
  }
}

const myPizza2 = new SpecialtyPizza("medium");
myPizza2.slice();

let myPizza3 = new Pizza2("large");
myPizza3.order();
