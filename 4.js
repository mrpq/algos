const insert = arr => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log("---insert---");

const arr = [2, 5, 6, 1, 4, 3, -1, 10, 16, 9];
const res = insert(arr);
console.log(res);
