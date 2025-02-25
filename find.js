//find method return true or false value if its true the return that value and stops there,,,,,,,,,,, it stops if first find the value

let arrays = [34, 54, 32, 22, 54, 32, 34, 44, 565, 2234, 34];

let findArray = arrays.find((res) => {
  return res > 50;
});

console.log(findArray);
