function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");
  const cart = getCart();
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li class='list-group-item'>Your cart is empty.</li>";
    totalEl.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    let price = item.includes("Karhai") ? 1200 : item.includes("Tikka") ? 1100 : item.includes("Kabab") ? 1100 : 100;
    total += price;
    cartList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item}
        <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">Remove</button>
      </li>`;
  });

  totalEl.innerText = `Total: Rs ${total}`;
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function placeOrder() {
  const cart = getCart();
  if (cart.length === 0) return alert("Cart is empty!");

  const message = encodeURIComponent("Hi Mashallah Bar B-Q, I want to order: \n" + cart.join(", "));
  window.open(`https://wa.me/923009638421?text=${message}`, "_blank");
}

document.addEventListener("DOMContentLoaded", renderCart);
