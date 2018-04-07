const csort = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = i; j < arr.length - 1; j++) {
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

console.log("----insert---");
const arr = [3, 5, 4, 2, 1, 6, 2, 6, 3, 3, 3, 7, -1];
console.log(csort(arr));
