# Project - Build an order system
Here, you'll build out a basic order system using just JavaScript and no front end code. We're going to practice using functions and objects!


# Steps
1. Create an array of items for sale, name it `productsList`. This will be the items a user can purchase from our store.
2. Add 5 items of your choice to the list. Each item will be an object like:
```
{
  itemId: 'nike123',
  title: 'Nike Pumps 2021',
  cost: 299.99
}
```
3. Create a function `createCart` which takes a parameter of a `userId` string and returns a cart object like this:
```
{
  userId: 'bob',
  items: [],
  coupon: '',
}
```
3. Create two different carts for two different userId's - 'bob' & 'suzy'
4. Create a function `printCart` which prints out items in the car in the format "[id] - [title] - [cost]" ex. "nike123 - Nike Pumps 2021 - 299.99"
5. Create a function `addToCart` which adds an item from the `productsList` and puts it in a user's cart.
6. Create a function `getCartTotal` which returns the total cost of all the products in a user's cart.
7. Create a function `autoApplyCoupon` which
  * If the cart has 5 or more items and no coupon, then set the coupon 'BIGSPENDER' to the cart. And then console logs "'BIGSPENDER' coupon auto-applied!"
  * If the cart has less than 5 items and has the coupon 'BIGSPENDER', then remove that coupon from the cart. And console log "'BIGSPENDER' coupon auto-removed! Buy more!"
8. Modify the `getCartTotal` function to apply a 10% discount to the returned total if there is a coupon in the cart, and console log '[COUPON] discount used', where '[COUPON]' is the name of the coupon.
9. Write a function `clearCart` which removes all items and coupon from a user's cart.
10. Modify `addToCart` to auto-run `autoApplyCoupon` after adding the item to a cart.

# Tests
Write all these functions and run them to verify all your code above works. 

The below code asks you to verify some values, this can be done simply as:
```
if (totalCartValue !== 500.54) {
  console.error('Total cart value didn't match')
}
```

These are all separate functions, make sure your code runs all of them in the same file. Each test should be independent of the other and only use the functions above, and no global variables.
1. Write a function that creates a cart, adds an item to that cart, and then verifies that specific item was added to the cart.
2. Write a function that creates two carts, adds a different item to each cart, and then verifies that each cart only has 1 item in it.
3. Write a function that creates a cart, adds 1 item to the cart, and verifies that `getCartTotal` returns the right amount.
4. Write a function that creates a cart, adds all items in the `productList`, and verifies that `getCartTotal` returns the right amount.
5. Write a function that creates a cart, adds 5 items to it, and verifies that `coupon` was set to the right value.
6. Write a functiont hat creates a cart, adds 4 items to the cart, and verifies that `coupon` is set to the right value.
7. Write a function that creates a cart, adds 5 items to it, then runs `clearCart`, and verifies that `coupon` was set to the right value.
