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

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1){
    total += order[i]
  }
  // Change code above this line
    console.log(total)
  return total;
}

calculateTotalPrice([12, 85, 37, 4])