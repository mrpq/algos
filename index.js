const csort = arr => {
  for (let i = arr.length - 2; i > 0; i--) {
    for (let j = i; j < arr.length - 1; j++) {
      console.log(arr[j]);
      console.log(arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      } else {
        break;
      }
    }
  }
  return arr;
};
//           0  1  2  3  4
const arr = [3, 5, 4, 2, 1];
console.log(csort(arr));
