// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location;
// apartment.location = "Jamaica";
// // apartment.location.city = "Kingston";

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line`
// for (const key in apartment) {
// //   keys += apartment.key;
// //   values += apartment[key]
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const res = [];
//   for (product of products) {
//     if (product[propName] === undefined) {
//       return res;
//     }
//     res.push(product[propName]);
//   }
//   return res;
//   // Change code above this line
// }


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice = 0;
for (let product of products) {
  if (product.name === productName) {
    totalPrice = product.price * product.quantity
  }
  
}

return totalPrice;
  // Change code above this line
}

const a = calculateTotalPrice("Radar")
console.log(a)