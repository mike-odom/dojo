let cold = true;
let morning = false;

if (cold) {
  console.log("It's time to put on a jacket");
}

if (!cold) {
  console.log("It's time for flip flops");
}

if (cold && morning) {
  console.log("It's time to put on a sweater");
}

if (!cold && !morning) {
  console.log("It's time for a run");
}

if (!!cold) {
  console.log("It is definitely cold");
}

if (morning || cold) {
  console.log("Say hi to jim");
}

if (morning) {
  console.log("This runs")
}

if (!morning) {
  console.log("Brush yer teeth");
} else {
  console.log("What's going on?");
}

if (!!false) {
  console.log("Hello!");
} else {
  console.log("Goodbye!");
}

if ("false") {
  console.log("Wait, what");
} else {
  console.log("oh, ok");
}

if (!"false") {
  console.log("Yeah, that");
} else {
  console.log("oohh");
}

function brushTeeth() {
  status();

  if (morning) {
    console.log("Brush yer teeth");
  } else {
    console.log("I ain't gotta brush my teeth");
  }
}

brushTeeth();

morning = !morning;

brushTeeth();

morning = !!morning;

brushTeeth();

morning = !!morning;

brushTeeth();

function status() {
  console.log(`It is currently ${morning} and it is ${cold ? 'cold' : 'not cold'}`);
}

function getEnergyLevel() {
  let energyLevel = morning ? 10 : 5;
  energyLevel += cold ? 2 : 7;
}

let energyLevel = getEnergyLevel();
console.log('Energy level: ', energyLevel);

brushTeeth();

status();

function getBetterEnergyLevel() {
  let energyLevel = morning ? 10 : 5;
  energyLevel += cold ? 2 : 7;

  return energyLevel;
}

energyLevel = getBetterEnergyLevel();

console.log('Energy level: ', energyLevel);

