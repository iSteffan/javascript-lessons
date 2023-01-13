function changeEven(numbers, value) {
  // Change code below this line
  let a = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      a.push(numbers[i] + value);
    } else {
      a.push(numbers[i]);
    }
  }
  return a;
  // Change code above this line
}
const b = changeEven([1, 2, 3, 4, 5], 10);
console.log(b);
