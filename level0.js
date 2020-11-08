let cats = 7;
console.log(cats);

cats = cats + 1;
console.log(cats);

cats++;
console.log(cats);

cats += 1;
console.log(cats);

if (cats < 5) {
    cats = cats + 1;
} else {
    cats = cats - 1;
}

cats *= 3;
console.log(cats);

while (cats > 25) {
    cats--;
    console.log(cats);
}

console.log(cats);

for (let x = 0; x < 5; x++) {
    if (x !== 3) {
        cats += x;
    }
    console.log(cats);
}

function increase(num) {
    return num + 1;
}

increase(cats);
console.log(cats);

cats = increase(cats);
console.log(cats);

for (let t = 0; t < 3; t++) {
    console.log(increase(cats));
}

console.log(cats);

cats = increase(cats);
console.log(cats);

function add(num, by) {
    console.log('adding');
    num += by;
}

console.log(cats);

add(cats, 7);
console.log(cats);

cats = add(cats, 20);
console.log(cats);
