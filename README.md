# The Lesson:
Imagine you're ordering a delicious pizza 🍕. When you call the restaurant, you don't stand there waiting by the phone, staring at it intensely. Instead, you get a "promise" that your pizza will be delivered. You can continue doing other things while waiting - maybe set the table, grab a drink, or watch some TV. When the pizza arrives, you handle it. If something goes wrong, the delivery person lets you know.

JavaScript Promises work exactly the same way!

*Take a look at the image below:*
![](pizza-response.jpg)

Here is how the code would look for this request:


```js
const response = await fetch("https://indoatlantis.com/rest_api/last_transaction")
const pizza = await response.json()

// Do stuff with pizza!

// Now, and only now that we awaited those asynchronous operations we can do what every we want with our pizza.
```

# The Project:

## 🍕 Welcome to Daves Wacky Pizza Delivery! 🍕

Dave has asked us to help him make a quick application for his Pizza Bussines that will allow his customers to order from him!
Here is what he asked for: 
- A button that will generate a randome pizza,
- Display the toppings, size, crust, and the name of the Pizza
  
Thats It!

Using Async & Await, please help Dave generate Wacky Pizzas for his customers. 


### Follow up Questions:
- What is Async
- What is Await
- When should you use Async/ Await
- What are the benefits
