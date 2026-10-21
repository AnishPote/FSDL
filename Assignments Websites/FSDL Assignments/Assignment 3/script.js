const products = [
    { id: 1, name: "Basic White T-Shirt", price: 19.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
    { id: 2, name: "Denim Jacket", price: 59.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 3, name: "Classic Blue Jeans", price: 49.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
    { id: 4, name: "Cozy Grey Hoodie", price: 39.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
    { id: 5, name: "Elegant Blue Dress", price: 79.99, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" },
    { id: 6, name: "Leather Formal Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500" },
    { id: 7, name: "Casual white Cap", price: 14.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" },
     { id: 8, name: "Sporty Sneakers", price: 69.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 9, name: "Aviator Sunglasses", price: 29.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
    { id: 10, name: "Designer Handbag", price: 120.00, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500" },
    { id: 11, name: "Minimalist Watch", price: 150.00, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
    { id: 12, name: "Warm Winter Scarf", price: 24.99, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500" },
    { id: 13, name: "Leather Belt", price: 34.99, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500" },
    { id: 14, name: "Travel Backpack", price: 85.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 15, name: "Cotton Socks Set", price: 9.99, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500" }
];

let cart = [];

const productGrid = document.getElementById('product-grid');
const cartContainer = document.getElementById('cart-container');
const cartCount = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');


function displayProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}

function addToCart(productId) {
    const productToAdd = products.find(p => p.id === productId);
    
    if (productToAdd) {
        cart.push(productToAdd);
        updateCart();
        alert(`${productToAdd.name} added to cart!`);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCount.innerText = cart.length;
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.innerText = '$0.00';
        return;
    }
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    totalPriceElement.innerText = '$' + total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
});
