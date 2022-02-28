class Pizza {
constructor (crust, sauce, cheese) {
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  }
}
class Appetizer extends Pizza {
constructor (crust, sauce, cheese, wings) {
  super (crust, sauce, cheese);
this.wings = wings;
  }
}
class Dessert extends Pizza {
  constructor (crust, sauce, cheese, cinnasticks) {
    super (crust, sauce, cheese);
this.cinnasticks = cinnasticks;
  }
  greet() {
    return `I would like ${this.crust}, ${this.sauce}, ${this.cheese} and ${this.wings}.`;
  }
}
const pizzaOrder = new Appetizer(thin, marinara, mozzarella, buffalo);
pizzaOrder.greet();





