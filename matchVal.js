let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9];
function findMatchVal(arr, arr2) {
  let result = arr.map((elem) => arr2.includes(elem));
  return result;
}
console.log(findMatchVal(arr, arr2));
