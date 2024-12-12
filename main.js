const orderPizza = async () => {
  const response = await fetch("http://localhost:3000/pizzas/1")
  const pizza = await response.json()

  document.getElementById("pizza-info").innerHTML = `
      You ordered a ${pizza.size} ${pizza.toppings.join(", ")} pizza (ID: ${
    pizza.order_id
  })
    `
}
