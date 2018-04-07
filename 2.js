const bubble = arr => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = false;
      }
    }
  }
  return arr;
};

console.log("---bubble---");
const arr = [2, 5, 6, 1, 4, 3, -1, 10, 16, 9];
const res = bubble(arr);
console.log(res);
