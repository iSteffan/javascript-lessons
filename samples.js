const basket = {
  products: [],
  getProducts() {
    return this.products;
  },
  addProducts(item) {
    const { products } = this;
    for (const product of products) {
      if (product.name === item.name) {
        product.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...item,
      quantity: 1,
    };
    return products.push(newProduct);
  },
  removeProducts(item) {
    const { products } = this;
    for (let i = 0; i < products.length; i += 1) {
      const { name } = products[i];
      if (name === item) {
        products.splice(i, 1);
        console.log(`${name} removed`);
      }
    }
  },
  getTotalPrice() {
    let total = 0;
    const { products } = this;
    for (const { price, quantity } of products) {
      total += price * quantity;
    }
    console.log('Total price: ', total);
    return total;
  },
  clearBasket() {
    return (this.products = []);
  },
};
