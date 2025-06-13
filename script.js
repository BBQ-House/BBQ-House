// ----------------------
// CART SYSTEM
// ----------------------
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const count = getCart().length;
  const el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function addToCart(itemName) {
  const cart = getCart();
  cart.push(itemName);
  saveCart(cart);
  updateCartCount();
  showToast(`${itemName} added to cart!`);
}

// ----------------------
// TOAST POPUP
// ----------------------
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 600);
  }, 2000);
}

// ----------------------
// SCROLL TO TOP BUTTON
// ----------------------
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTopBtn");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----------------------
// OPTIONAL: TESTIMONIAL SLIDER
// ----------------------
let currentTestimonial = 0;
function rotateTestimonials() {
  const cards = document.querySelectorAll(".testimonial-card");
  if (!cards.length) return;
  cards.forEach((card, i) => {
    card.style.display = i === currentTestimonial ? "block" : "none";
  });
  currentTestimonial = (currentTestimonial + 1) % cards.length;
}

// ----------------------
// INIT
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setInterval(rotateTestimonials, 3000); // Optional
});
