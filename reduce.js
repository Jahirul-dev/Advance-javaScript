//The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.

// const arr = [23, 43, 67, 23, 432];
// const acc = 0;
// let arrayReturn = arr.reduce((acc, val) => {
//   if (val > 20) {
//     acc += 1;
//   }
//   console.log(acc);

//   return acc;
// });
// console.log(arrayReturn);

let arrayForReduce = [12, 43, 23, 32, 43, 32];

let asd = arrayForReduce.reduce(getfunc);
console.log(asd);
function getfunc(acc, currVal) {
  return acc - currVal;
}
