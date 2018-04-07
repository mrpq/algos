class LL {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}
// 1 -> 2 -> 3 -> 4 -> null
const ll = new LL(1, new LL(2, new LL(3, new LL(4))));

const reverse = list => {
  console.log(list.value);
  if (list.next === null) {
    return list.value;
  } else {
    return new LL(reverse(list.next), new LL(list.value));
  }
};

const res = reverse(ll);
console.log(res.value.value);
