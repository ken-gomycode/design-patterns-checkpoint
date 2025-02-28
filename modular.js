class ShoppingCart {
    constructor() {
        if (!ShoppingCart.instance) {
            this.cart = [];
            ShoppingCart.instance = this;
        }
        return ShoppingCart.instance;
    }

    addItem = (name, quantity, price) => {
        this.cart.push({ name, quantity, price });
    };

    viewCart = () => {
        this.cart.forEach(item => {
            let itemTotal = item.quantity * item.price;
            console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
        });
        let total = this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
        console.log(`Total: ${total.toFixed(2)} TND`);
    };

    removeItem = (name) => {
        this.cart = this.cart.filter(item => item.name !== name);
    };

    clearCart = () => {
        this.cart = [];
    };
}

const myCart = new ShoppingCart();
Object.freeze(myCart); // Ensures no modifications to instance

// Usage Example
myCart.addItem("Apple", 2, 1.5);
myCart.addItem("Orange", 3, 2.0);
myCart.viewCart();
myCart.removeItem("Apple");
myCart.viewCart();
myCart.clearCart();
