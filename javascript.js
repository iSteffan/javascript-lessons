// console.log("hello");

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const a = message.split(' ');
//     console.log(a)
//    const b = a.length * pricePerWord
//         console.log(b)
//     return b

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const a = firstArray.concat(secondArray)
//     console.log(a.length)
//     if (a.length > maxLength) {
//         const b = a.slice(0, maxLength)
//         console.log(b)
//         return b
//     }
// return a
//     // Change code above this line
// }

// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
//     // console.log(b)

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0
//   for (let i = 0; i <= number; i++) {
//     total += i
//   }
//    return total

//   // Change code above this line
// }

// const a = calculateTotal(7)
// console.log(a)

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//     total += order[i]
//   }
//   // Change code above this line
//     console.log(total)
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(' ')
//   console.log(array.length)
//   let longestWord = array[0]
//   for (let i = 0; i <= array.length - 1; i += 1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i]
//     }

//   }
//   return longestWord
//   // Change code above this line
// }
// let a = findLongestWord("The quick brown fox jumped over the lazy dog")
// console.log(a)

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1){
//   numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }

// const a = createArrayOfNumbers(1, 3)
// console.log(a)

// function filterArray(numbers, value) {
//    // Change code below this line
//   let neww = []
//   for (let i = 0; i <= numbers.length - 1; i += 1){
// //   numbers.push(i)
//     if (numbers[i] > value) {
//       neww.push(numbers[i])
//     }
// }
// return neww

//   // Change code above this line
// }
// const a = filterArray([1, 2, 3, 4, 5], 3)
// console.log(a)

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line

// }

// const a = checkFruit("plum")
// console.log(a)

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let b = []
//   for (let i = 0; i <= array1.length - 1; i += 1) {
//     if (array2.includes(array1[i])) {
//       b.push(array1[i])
//     }
//   }
//   return b
//  // Change code above this line
// }

// const a = getCommonElements([1, 2, 3], [2, 1, 17, 19])
// console.log(a)

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const b = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       b.push(i);
//     }
//   }

//   return b;
// }

// // Change code above this line

// const a = getEvenNumbers(2, 5);
// console.log(a);

function includes(array, value) {
  // Change code below this line
  for (let i = 0; i <= array.length - 1; i += 1){
  // Change code above this line
      if (array[i] === value){
        return true;
    }

  }
      return false
}

const a = includes([1, 2, 3, 4, 5], 3)
console.log(a);
