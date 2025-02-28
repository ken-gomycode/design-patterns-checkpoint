# Design Patterns Practice - Shopping Cart System

## Overview
This project implements a shopping cart system in JavaScript, first using a procedural approach and then refactoring it using the Singleton design pattern. The goal is to demonstrate how structured design patterns improve code maintainability and scalability.

## Features
- Add items to the cart (name, quantity, and price)
- View all items in the cart and calculate the total price
- Remove an item from the cart by name
- Clear all items from the cart
- Ensures only one instance of the shopping cart exists (Singleton Pattern)

## Implementation
### Procedural Approach
- Uses global variables to store the cart data.
- Functions handle adding, removing, viewing, and clearing the cart.
- Suitable for small-scale applications but lacks structure for scalability.

### Refactored Singleton Pattern Approach
- Encapsulates the shopping cart inside a class.
- Ensures that only one cart instance exists using the Singleton pattern.
- Uses `Object.freeze()` to prevent modifications to the instance.
- Improves code organization and maintainability.

## How to Use
1. Clone the repository.
2. Open the JavaScript file in a browser console or Node.js environment.
3. Use the following commands to interact with the cart:
   ```javascript
   myCart.addItem("Apple", 2, 1.5);
   myCart.viewCart();
   myCart.removeItem("Apple");
   myCart.clearCart();
   ```

## Lessons Learned
- Procedural programming is simple but can become unorganized as a project grows.
- The Singleton pattern helps maintain a single source of truth for shared data.
- Using `reduce()` makes total price calculations more efficient and readable.

## Author
Ken Ovienadu

## Assignment Report
[View the full assignment report here](https://docs.google.com/document/d/1PdmBlg3bVVjbZ7kHdBJNZm61a3E5dve26u3bZglYSI8/edit?usp=sharing)

## License
This project is open-source and available under the MIT License.

