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

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
// for (let product of products) {
//   if (product.name === productName) {
//     totalPrice = product.price * product.quantity
//   }

// }

// return totalPrice;
//   // Change code above this line
// }

// const a = calculateTotalPrice("Radar")
// console.log(a)

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const a = { category, priority, ...data, completed };
//   console.log(a);
//   return a;
//   // Change code above this line
// }
// const b = makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// console.log(b);

// function add(...args) {
//   // Change code above this line
//   const a = args;
//   let total = 0;
//   console.log(a);
//   for (let i = 0; i <= args.length - 1; i += 1) total += args[i];
//   return total;
// }
// const b = add(12, 4, 11, 48);
// console.log(b);

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//   console.log(args);
//   for (let i = 0; i <= args.length - 1; i += 1) {
//     if (args[0] < args[i]) {
//       total += args[i];
//     }
//   }
//   // for (const arg of args) {
//   //   total += arg;
//   // }
//   return total;
//   // Change code above this line
// }
// const b = addOverNum(50, 15, 27);
// console.log(b);

// function findMatches(...args) {
//   const a = [...args[0]];
//   console.log(a);
//   const matches = []; // Don't change this line
//   for (let i = 1; i <= args.length - 1; i += 1) {
//     if (a.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// const b = findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// console.log(b);

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = atTheOldToad;
    for (const potion of potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    //const addPortion = {
    //  ...potions,
    // ...newPotion,
    console.log(potions.push({ name: 'Invisibility', price: 620 }));
    return potions.push(newPotion);
    //return addPortion;
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

// const a = atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// console.log(a);
const b = atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.log(b);
const c = atTheOldToad.removePotion('Speed potion');
console.log(c);
