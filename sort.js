let sArr = [32, 43, 23, 32, 1, 23, 21];

sArr.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else return 0;
});
console.log(sArr);
