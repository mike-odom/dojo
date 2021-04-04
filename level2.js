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

addedNums = addNumbers(10, 30);
console.log('addedNums', addedNums);

addNumbers(10, 1);
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
console.log('addedNums', addedNums);

addedNums = addNumbersWithCallbacks(getAge(), getGrade);
// That last line will fail, see what happens and then fix it
