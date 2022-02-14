
const pizzaToppings=["pepperoni", "cheese", "pineapple", "jalapenos"];
function greetCustomer () {
  let message = 'Welcome to Freddy Fazzbear Pizza! Our pizza toppings are:'
  for ( let option of pizzaToppings) {
    message += `${option}`;
  }
  console.log(message);
}
function getPizzaOrder (size, crust, ...toppings) {
  let message= `'one ${size}, ${crust} pizza with'`;
  for ( let option of toppings) {
    message += `${option}`;
  }
  console.log(`${message} coming up!`);
  return [size, crust, toppings]
}
let pizzaInput = getPizzaOrder("small", "thin", "pepperoni")
const preparePizza= function ([orderSize, orderCrust, orderToppings]) {
 console.log("Cooking pizza");
 return {
   size: orderSize,
   crust: orderCrust,
   toppings: orderToppings
 }
}
function servePizza (pizzaInput) {
  let message = console.log(`"Order up! Here's your ${pizzaInput.size} ${pizzaInput.crust}. Enjoy!"`);
  for (let pepperoni of toppings) {
    message += `${pepperoni}`;
  }
  console.log(message);
  return pizzaInput;
}
servePizza(pizzaInput);


