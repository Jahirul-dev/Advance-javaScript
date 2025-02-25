//The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.

const arr = [23, 43, 67, 23, 432];
const acc = 0;
let arrayReturn = arr.reduce((acc, val) => {
  acc = acc;
  if (val > 20) {
    acc += 1;
  }
  console.log(acc);

  return acc;
});
console.log(arrayReturn);
