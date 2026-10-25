// OUT THE MUD — Website interactions

const cart = [];

const cartCount = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");

// Open and close the shopping bag
function toggleCart() {
    cartPanel.hidden = !cartPanel.hidden;
    renderCart();
}

// Update the shopping bag
function renderCart() {
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartPanel.innerHTML = `
            <button class="close-cart" onclick="toggleCart()">CLOSE ✕</button>
            <h2>YOUR BAG</h2>
            <p>Your bag is currently empty.</p>
            <p class="cart-note">THE MUD MADE US.</p>
        `;
        return;
    }

    cartPanel.innerHTML = `
        <button class="close-cart" onclick="toggleCart()">CLOSE ✕</button>
        <h2>YOUR BAG (${cart.length})</h2>
        ${cart.map((item, index) => `
            <div class="cart-item">
                <p><strong>${item.name}</strong></p>
                <p>${item.price}</p>
                <button onclick="removeFromCart(${index})">REMOVE</button>
            </div>
        `).join("")}
        <p class="cart-note">THE MUD MADE US.</p>
    `;
}

// Demo products for testing the cart later
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

// Remove a product from the bag
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Current products are not yet available for purchase
function notifyComingSoon() {
    alert("OTM is preparing something special. The collection is coming soon! THE MUD MADE US.");
}