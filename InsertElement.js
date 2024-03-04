let array = [10, 20, 30, 40, 50, 100];
let addNum = 4000;
let position = 3;
for (let i = array.length - 1; i >= 0; i--) {
  if (i >= position) {
    array[i + 1] = array[i];
    if (i == position) {
      array[i] = addNum;
    }
  }
}
console.log(array);
