const products = [
{ id:1, name:"T-Shirt", price:500, category:"clothing", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"},
{ id:2, name:"Sneakers", price:2000, category:"shoes", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
{ id:3, name:"Watch", price:1500, category:"accessories", image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"},
{ id:4, name:"Jacket", price:2500, category:"clothing", image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"}
];

let cart = [];

function displayProducts(list){
const grid = document.getElementById("product-grid");
grid.innerHTML = "";

list.forEach(p=>{
let card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
`;

grid.appendChild(card);
});
}

/* ADD TO CART */
function addToCart(id){
let item = cart.find(p=>p.id===id);

if(item){
item.qty++;
}else{
let product = products.find(p=>p.id===id);
cart.push({...product, qty:1});
}

showToast("Added to Cart 🛒");
updateCart();
}

/* REMOVE */
function removeItem(id){
cart = cart.filter(p=>p.id !== id);
updateCart();
}

/* QTY */
function changeQty(id, delta){
let item = cart.find(p=>p.id===id);
item.qty += delta;

if(item.qty <= 0){
removeItem(id);
}else{
updateCart();
}
}

/* UPDATE CART */
function updateCart(){
document.getElementById("cart-count").innerText = cart.length;

let total = 0;
let html = "";

if(cart.length === 0){
html = "<p>Cart is empty</p>";
}

cart.forEach(item=>{
total += item.price * item.qty;

html += `
<div class="cart-item">
<p>${item.name} (₹${item.price})</p>
<div>
<button onclick="changeQty(${item.id},-1)">-</button>
<span>${item.qty}</span>
<button onclick="changeQty(${item.id},1)">+</button>
<button onclick="removeItem(${item.id})">❌</button>
</div>
</div>
`;
});

document.getElementById("cart-items").innerHTML = html;
document.getElementById("total").innerText = total;
}

/* SEARCH */
function searchProducts(){
let value = document.getElementById("search").value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);
}

/* FILTER */
function filterCategory(cat){
if(cat === "all"){
displayProducts(products);
}else{
let filtered = products.filter(p=>p.category === cat);
displayProducts(filtered);
}
}

/* TOAST */
function showToast(msg){
let toast = document.createElement("div");
toast.className = "toast";
toast.innerText = msg;

document.body.appendChild(toast);

setTimeout(()=> toast.remove(),2000);
}

/* SCROLL */
function scrollToProducts(){
document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

function scrollToCart(){
document.getElementById("cart").scrollIntoView({behavior:"smooth"});
}

/* INIT */
displayProducts(products);