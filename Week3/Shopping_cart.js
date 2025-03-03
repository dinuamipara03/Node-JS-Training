// task 2: Shopping Cart

// Scenario: You need to create a simple shopping cart where items can be added and removed, but the cart contents should remain private (using closures).

// Requirements:
// Create a function createCart(), which returns three functions:
// addItem(item): Adds an item to the cart.
// removeItem(item): Removes an item if it exists.
// viewCart(): Displays all items in the cart.

// The cart should not be accessible directly from outside (use a closure).
// Use arrow functions where applicable.

function createCart() {
  const cart = [];

  const addItem = (item) => {
    if(item==null) return console.log("Item can't be empty");
    cart.push(item);
    return console.log("Item added to cart:", item);
  };

  const removeItem = (item) => {
    return (!cart.includes(item))?console.log("Item not found in cart:",item):  cart.splice(cart.indexOf(item), 1);
  };

  const viewCart = () => {
    return cart.length >0?console.log("Items in cart:",cart):console.log("No items in cart");
  }
  return { addItem, removeItem, viewCart };
};

const cart = createCart();
cart.viewCart();
cart.addItem();
cart.addItem("Shirt");
cart.addItem("Shoes");
cart.addItem("Lipstick");
cart.viewCart();
cart.removeItem("Lipstick");
cart.viewCart();
cart.removeItem("Tshirt");
cart.viewCart();
