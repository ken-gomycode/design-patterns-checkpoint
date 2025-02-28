let cart = [];

const addItem = (name, quantity, price) => {
    cart.push({ name, quantity, price });
};

const viewCart = () => {
    cart.forEach(item => {
        let itemTotal = item.quantity * item.price;
        console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
    });
    let total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    console.log(`Total: ${total.toFixed(2)} TND`);
};

const removeItem = (name) => {
    cart = cart.filter(item => item.name !== name);
};

const clearCart = () => {
    cart = [];
};


// Usage Example
addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);
viewCart();
removeItem("Apple");
viewCart();
clearCart();