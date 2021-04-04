let cart = [];

function printCart() {
  console.log('Cart', cart);
}

function addProductToCart(productId) {
  cart.push(productId);
}

printCart();

addProductToCart('strawberries');

addProductToCart('bananas');

printCart();

addProductToCart('milk');

orders = [];

printCart();

const orderPotatoes = () => addProductToCart('potatoes');

printCart();

orderPotatoes();

printCart();

orderPotatoes();

printCart();

function addProductToSpecificCart(cart, productId) {
  cart.push(productId);
  console.log('cart', cart);
}

const marysCart = [];

addProductToSpecificCart(marysCart, 'oranges');

printCart();

function printSpecificCart(cart) {
  console.log('Specific Cart', cart);
}

printCart();

printSpecificCart(marysCart);

function orderProductAsync() {
  setTimeout(() => addProductToCart('raspberries'), 3000);
}

orderProductAsync();
printCart();
