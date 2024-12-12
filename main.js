// When the user clicks the order button, invoke orderPizza
const orderButton = document.querySelector("#orderButton")
orderButton.addEventListener("click", () => {
  orderPizza()
})

const orderPizza = async () => {
  // get the pizza
  const myPizza = await getPizza()
  // display the pizza
  displayPizza(myPizza)
}

const getPizza = async () => {
  // Generate a random pizza ID
  const randomPizzaId = Math.floor(Math.random() * 10) + 1

  // Fetch the random pizza
  const response = await fetch(`http://localhost:8088/pizzas/${randomPizzaId}`)
  const pizza = await response.json() // the .json() method IS AN ASYNCHRONOUS operation

  // Return the pizza
  return pizza
}

const displayPizza = (pizza) => {
  // Generate HTML to display pizza details
  const pizzaDetails = `
    <h2>${pizza.name}</h2>
    <p>Size: ${pizza.size}</p>
    <p>Crust: ${pizza.crust}</p>
    <p>Toppings: ${pizza.toppings.join(", ")}</p>
  `
  // Append HTML in the appropriate location
  document.querySelector("#pizza-info").innerHTML = pizzaDetails
}
