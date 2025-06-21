const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "phones",
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15Pro",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "Macbook Air",
        price: 1199,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "Airpods Pro",
        price: 249,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+S24",
        description: "Android phone with incredible features"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
        description: "Reliablet laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
        description: "Ergonomic wireless mouse for productitvy"
    }
];

// Step2: Creating out shopping cart.
// This will store all items the customer wants to buy.

let cart = [];

// Step3: Get refrences to HTML elements
// This connects our JS to specific parts of our webpage.

const cartCountElement = document.getElementById("cart-count");
const productsGrid = document.getElementById("products-grid");
const featuredProducts = document.getElementById("featured-products");

// Step4: Utility function to format prices
// This will make a price look like "R999" instead of "999"
function formatPrice(price) {
    return 'R' + price.toFixed(2) //R999

}

console.log('Javascript Loades succesfully');
console.log('We have', products.length, 'products.')
