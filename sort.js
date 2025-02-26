let sArr = [32, 43, 23, 32, 1, 23, 21];

sArr.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else return 0;
});
// console.log(sArr);

//

const sObj = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jim" },
  { id: 4, name: "Jill" },
];

sObj.sort((a, b) => {
  if (a.id > b.id) {
    return -1;
  } else if (a.id < b.id) {
    return 1;
  } else return 0;
});
console.log(sObj);
