function addNumbers(num1, num2) {
  return num1 + num2;
}

let addedNums = addNumbers(5, 6);
console.log('addedNums', addedNums);

addedNums = addNumbers(5, 6);
console.log('addedNums', addedNums);

addedNums = addNumbers(6, 5);
console.log('addedNums', addedNums);

addedNums = addNumbers(6, 2 + 3);
console.log('addedNums', addedNums);

addedNums = addNumbers(5 + 1, 2 + 3);
console.log('addedNums', addedNums);

addedNums = addNumbers(2 * 3, 2 + 3);
console.log('addedNums', addedNums);

function getAge() {
  console.log('Getting age');
  return 5 + 29;
}

function getGrade() {
  return 7;
  console.log('Getting grade');
}

let age = getAge();
console.log('age', age);

age + 15;
console.log('age', age);

age = getAge();
console.log('age', age);

age += 15;
console.log('age', age);

age = getAge();
console.log('age', age);

console.log('age', age + 27);

console.log('age', age + 1);

console.log('age', getAge());

console.log('age', !getAge());

console.log('age', getAge);

console.log('age', !!getAge());

function addNumbersWithCallbacks(num1callback, num2callback) {
  return num1callback() + num2callback();
}

addedNums = addNumbersWithCallbacks(getAge, getGrade);

addedNums = addNumbersWithCallbacks(getAge(), getGrade);

let orders = [];

function printOrders() {
  console.log('Orders', orders);
}

function orderProduct(productId) {
  orders.push(productId);
}

printOrders();

orderProduct('strawberries');

orderProduct('bananas');

printOrders();

orderProduct('milk');

orders = [];

printOrders();

const orderPotatoes = () => orderProduct('potatoes');

printOrders();

orderPotatoes();

printOrders();

let potatoes = addNumbersWithCallbacks(orderPotatoes, orderPotatoes);
console.log('Potatoes', potatoes);

potatoes = addNumbersWithCallbacks(orderPotatoes(), orderPotatoes());
console.log('Potatoes', potatoes);

function orderProductAsync() {
  setTimeout(() => orderProduct('potatoes'), 3000);
}

orderProductAsync();
printOrders();
