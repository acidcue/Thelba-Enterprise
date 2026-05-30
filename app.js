// ─── 1. HIGH-PERFORMANCE PRODUCT DATA ───
const PRODUCTS_DATABASE = [
    {
        id: 1,
        name: "Snack Round Holder",
        price: 40.00,
        image: "products/item-1.png"
    },
    {
        id: 2,
        name: "Household Rice Sealed Jar (20 Catties)",
        price: 110.00,
        image: "products/item-2.png"
    },
    {
        id: 3,
        name: "32oz Sport Frosted Gradient Water Bottle",
        price: 50.00,
        image: "products/item-3.png"
    },
    {
        id: 4,
        name: "80GR Continuous Spray Bottle",
        price: 20.00,
        image: "products/item-4.png"
    },
    {
        id: 5,
        name: "Egg Crates Storage System",
        price: 60.00,
        image: "products/item-5.png"
    },
    {
        id: 6,
        name: "Buimart Toy Organizer / Storage Box (10 Pack)",
        price: 100.00,
        image: "products/item-6.png"
    },
    {
        id: 7,
        name: "Kitty Silicone Tumbler Holder",
        price: 30.00,
        image: "products/item-7.png"
    },
    {
        id: 8,
        name: "Stanley/Tumbler Bag Holder",
        price: 40.00,
        image: "products/item-8.png"
    },
    {
        id: 9,
        name: "Triangle Window Mop With Long Handle",
        price: 50.00,
        image: "products/item-9.png"
    },
    {
        id: 10,
        name: "High Quality Tote Bag Canvas Shoulder Bag",
        price: 100.00,
        image: "products/item-10.png"
    },
    {
        id: 11,
        name: "Logo Handbag",
        price: 100.00,
        image: "products/item-11.png"
    },
    {
        id: 12,
        name: "Stanley Lunch Bag (Multi-Color)",
        price: 320.00,
        image: "products/item-12.png"
    },
    {
        id: 13,
        name: "Sport Vacuum Insulated Bottle (530ml)",
        price: 100.00,
        image: "products/item-13.png"
    },
    {
        id: 14,
        name: "Sport Vacuum Insulated Bottle (750ml)",
        price: 120.00,
        image: "products/item-14.png"
    },
    {
        id: 15,
        name: "Silicone Tumbler Protection Sleeve",
        price: 30.00,
        image: "products/item-15.png"
    },
    {
        id: 16,
        name: "40oz Tumbler with Handle Red Pink Cups",
        price: 60.00,
        image: "products/item-16.png"
    },
    {
        id: 17,
        name: "Premium Vacuum Insulated Water Bottle",
        price: 100.00,
        image: "products/item-17.png"
    },
    {
        id: 18,
        name: "Silicone Straw Cover Accessories",
        price: 10.00,
        image: "products/item-18.png"
    },
    {
        id: 19,
        name: "Kitchen Grinder for Meat and Veggies",
        price: 60.00,
        image: "products/item-19.png"
    },
    {
        id: 20,
        name: "Adjustable Desk Cell Phone Stand",
        price: 60.00,
        image: "products/item-20.png"
    },
    {
        id: 21,
        name: "Plastic Cute Kids Bottle (480ml)",
        price: 30.00,
        image: "products/item-21.png"
    },
    {
        id: 22,
        name: "Stainless Steel Coffee Tumbler with Filter",
        price: 50.00,
        image: "products/item-22.png"
    },
    {
        id: 23,
        name: "Owala Water Bottle",
        price: 160.00,
        image: "products/item-23.png"
    },
    {
        id: 24,
        name: "Snack Bowl (Round / Rectangular)",
        price: 40.00,
        image: "products/item-24.png"
    },
    {
        id: 25,
        name: "Collapsible Coffee Cup Duo Pack",
        price: 30.00,
        image: "products/item-25.png"
    },
    {
        id: 26,
        name: "High Speed Flash Drive Node",
        price: 40.00,
        image: "products/item-26.png"
    },
    {
        id: 27,
        name: "Foldable Kids Water Bottle",
        price: 60.00,
        image: "products/item-27.png"
    },
    {
        id: 28,
        name: "Joseph Joseph 9-Piece Nesting Bowls",
        price: 150.00,
        image: "products/item-28.png"
    },
    {
        id: 29,
        name: "Kids Tyre Accent Water Bottle",
        price: 60.00,
        image: "products/item-29.png"
    },
    {
        id: 30,
        name: "Insulated Gym Water Bottle (1000ml)",
        price: 140.00,
        image: "products/item-30.png"
    },
    {
        id: 31,
        name: "Luxe 40oz Tumbler with Handle Set",
        price: 100.00,
        image: "products/item-31.png"
    },
    {
        id: 32,
        name: "Stanley Quencher H2.0 FlowState",
        price: 180.00,
        image: "products/item-32.png"
    },
    {
        id: 33,
        name: "Hydro Tumbler Checker System",
        price: 170.00,
        image: "products/item-33.png"
    },
    {
        id: 34,
        name: "Hydro Cup Stanley Edition",
        price: 170.00,
        image: "products/item-34.png"
    },
    {
        id: 35,
        name: "Stanley Portable Food Fresh Keeper",
        price: 160.00,
        image: "products/item-35.png"
    }
];
let cart = JSON.parse(localStorage.getItem('thelba_store_cart')) || [];
const WHATSAPP_NUMBER = "233244226011"; // 💡 Automatically updated with her real contact number from the catalog!
// ─── 2. ENGINE INITS ON LOAD ───
document.addEventListener('DOMContentLoaded', () => {
    generateFloatingSparkles();
    renderStoreProducts();
    updateCartUI();
    initializeGlimmerSpotlight();
});

// Generates the background sparkling ambient effect
function generateFloatingSparkles() {
    const container = document.getElementById('sparkle-container');
    if (!container) return;
    
    const sparkleCount = 20;
    for(let i = 0; i < sparkleCount; i++) {
        const gem = document.createElement('div');
        gem.className = 'glimmer-dot';
        gem.style.left = `${Math.random() * 100}vw`;
        gem.style.animationDelay = `${Math.random() * 8}s`;
        gem.style.animationDuration = `${7 + Math.random() * 7}s`;
        container.appendChild(gem);
    }
}

function initializeGlimmerSpotlight() {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;
    window.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
}

function renderStoreProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    PRODUCTS_DATABASE.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // 💡 OPTIMIZATION: Only animate the first 6 items visible on screen. 
        // This stops older phone processors from choking on 35 simultaneous animations.
        if (index < 6) {
            const delay = 0.1 + (index * 0.12);
            card.style.animationDelay = `${delay}s`;
        } else {
            card.style.animation = 'none';
            card.style.opacity = '1';
            card.style.transform = 'none';
        }

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" onerror="this.src='Thelba Enterprisee.png';">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">GHS ${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price})">
                    ADD TO BAG
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ─── 3. USER NAVIGATION INTERFACES ───
function enterStore() {
    document.body.classList.remove('show-landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) { item.quantity += 1; } else { cart.push({ name, price, quantity: 1 }); }
    
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.style.transform = 'scale(1.4) rotate(-5deg)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
    saveCart();
}

function removeFromCart(name) {
    const idx = cart.findIndex(i => i.name === name);
    if (idx > -1) {
        if (cart[idx].quantity > 1) { cart[idx].quantity -= 1; } else { cart.splice(idx, 1); }
    }
    saveCart();
}

// Persist cart values across tabs
function saveCart() {
    localStorage.setItem('thelba_store_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-badge');
    const totalDisplay = document.getElementById('cart-total-price');
    
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    if (badge) badge.innerText = totalCount;

    if (!container) return;
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart-message">Your shopping bag is currently empty.</div>`;
        if (totalDisplay) totalDisplay.innerText = `GHS 0.00`;
        return;
    }

    let grandTotal = 0;
    cart.forEach(item => {
        const sub = item.price * item.quantity;
        grandTotal += sub;

        const row = `
            <div class="cart-item-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid #fdf0f1; padding-bottom: 16px;">
                <div>
                    <h4 style="font-size: 0.9rem; font-weight: 500; margin-bottom: 4px;">${item.name}</h4>
                    <span style="color: var(--text-muted); font-size: 0.75rem;">GHS ${item.price.toFixed(2)} x ${item.quantity}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 14px;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: var(--primary-blush);">GHS ${sub.toFixed(2)}</span>
                    <i class="fa-solid fa-trash-can" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')" style="color: var(--text-muted); cursor: pointer; font-size: 0.85rem; transition: var(--transition-glam);" onmouseover="this.style.color='var(--primary-blush)'" onmouseout="this.style.color='var(--text-muted)'"></i>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', row);
    });

    if (totalDisplay) totalDisplay.innerText = `GHS ${grandTotal.toFixed(2)}`;
}

function checkoutToWhatsApp() {
    if (cart.length === 0) return;

    let txt = "🛍️ *THELBA ENTERPRISE - NEW BOUTIQUE ORDER*\n\n";
    txt += "----------------------------------------\n";
    let grand = 0;
    cart.forEach((item, index) => {
        const sub = item.price * item.quantity;
        grand += sub;
        txt += `*${index + 1}. ${item.name}*\n`;
        txt += `   Quantity: ${item.quantity} × GHS ${item.price.toFixed(2)}\n`;
        txt += `   Subtotal: GHS ${sub.toFixed(2)}\n\n`;
    });
    txt += "----------------------------------------\n";
    txt += `💰 *GRAND TOTAL: GHS ${grand.toFixed(2)}*\n\n`;
    txt += "Please provide payment instructions details to complete my purchase. Thank you!";

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`, '_blank');
    cart = [];
    saveCart();
    toggleCart();
}