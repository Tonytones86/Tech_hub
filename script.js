const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "phones",
        image: "https://https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTw0zVojYMosQrigrWleCLFSD87LURo4uvfizgzrFSTOO1ZTKCwaBkEHyeeYNd0YtQTr1cVMhLwKCNIf26v-nhY80TN3kUuHQL6N6bJ8yRkVCnVzYfyhnBhgcjtnuFcdjuX3fVAUpU&usqp=CAcg",
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
    },

    {
        id: 7,
        name: "Smart Watch",
        price: 199,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/22c55e/white?text=Smart+Watch",
        description: "Smart watch with fitness tracking and notifications"
    },

    {
        id: 8,
        name: "Gaming Headset",
        price: 129,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/F97316/white?text=Gaming+Headset",
        description: "Gaming headset with surround sound and microphone "
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
console.log('We have', products.length, 'products.');

function createProductCard(product) {
    return`
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                       ${formatPrice(product.price)}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product})">Add to Cart
                </button>

                <button class="btn btn-small btn-secondary" onclick="viewProduct(${product})">View Details
                </button>
            </div>
        </div>`
}

function displayProducts(productsToShow = products) {
    if (productsGrid) {
        console.log('Displaying products... on products page');
        productsGrid.innerHTML =  productsToShow.map(createProductCard).join('');
    } else {
        console.log('Not on products page, skipping display.');
    }
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

function viewProduct(productId) {
    const product
        = products.find(prod => prod.id === productId);
    alert('Product: ' + product.name +
        '\nPrice: ' + formatPrice(product.price) +
        '\nDescription: ' + product.description);
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(){
            // Remove active from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');
            // Get the category from the buttons data-category attribute
            const category = this.getAttribute('data-category');

            //Filter products based on category
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }

            displayProducts(filteredProducts);

            console.log('Showing', filteredProducts.length, 'products in category: ', category);
        });
    });
}


document.addEventListener('DOMContentLoaded', function (){
    console.log('Page loaded, displaying products...');
    displayProducts();
    setupFilters();
});