const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1000,
    inStock: true
  },
  {
    id: 2,
    name: "Phone",
    category: "Electronics",
    price: 700,
    inStock: true
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "Clothes",
    price: 25,
    inStock: false
  },
  {
    id: 4,
    name: "Book",
    category: "Books",
    price: 15,
    inStock: true
  },
  {
    id: 5,
    name: "Headphones",
    category: "Electronics",
    price: 120,
    inStock: true
  }
];
console.log("First product:", products[0].name);
console.log("Last product:", products[products.length - 1].name);
console.log("Number of products:", products.length);
for (let product of products) {
  console.log(
    "Product: " + product.name +
    " Category: " + product.category +
    " Price: " + product.price +
    " In Stock: " + product.inStock
  );
}
const selectedCategories = new Set();

selectedCategories.add("Electronics");
selectedCategories.add("Clothes");
selectedCategories.add("Books");

console.log("Selected Categories:", selectedCategories);
console.log("Set size:", selectedCategories.size);
console.log("Is 'Electronics' selected?", selectedCategories.has("Electronics"));
console.log("Is 'Toys' selected?", selectedCategories.has("Toys"));
const currentUser = {
  id: 101,
  name: "omran",
  email: "omran@gmail.com",
  address: {
    city: "hama",
    street: "hai tshreen",
    country: "Syria"
  }
};
console.log("User name:", currentUser.name);
console.log("User city:", currentUser.address.city);

const cartQuantity = new Map();
cartQuantity.set(1, 2);
cartQuantity.set(3, 1);
cartQuantity.set(5, 4);

console.log("Quantity for product 1:", cartQuantity.get(1));
console.log("Quantity for product 2:", cartQuantity.get(2));
console.log("Does product 3 exist?", cartQuantity.has(3));
console.log("Does product 2 exist?", cartQuantity.has(2));
console.log("Map size:", cartQuantity.size);

function calculateCartTotal(products, cartQuantity) {
  let total = 0;

  for (let product of products) {
    let quantity = cartQuantity.get(product.id);

    if (quantity === undefined) {
      quantity = 0;
    }

    total += product.price * quantity;
  }

  return total;
}
let cartTotal = calculateCartTotal(products, cartQuantity);
console.log("Cart Total: $" + cartTotal);
