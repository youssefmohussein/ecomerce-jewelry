document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.getElementById("cartContainer");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subtotal = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="container product-info">
        <p class="product1-name">Product: ${item.name}</p>
        <p class="product-price">Price: LE ${item.price.toLocaleString()}</p>
        <p class="unit">Quantity: ${item.quantity}</p>
        <div class="btn-area">
          <i class="fa fa-trash" onclick="removeFromCart('${item.name}')"></i>
        </div>
      </div>`;
    cartContainer.appendChild(box);
  });

  const tax = subtotal * 0.15;
  const shipping = subtotal > 0 ? 5000 : 0;
  const total = subtotal + tax + shipping;

  document.getElementById("subtotal").textContent = `LE ${subtotal.toLocaleString()}`;
  document.getElementById("tax").textContent = `LE ${tax.toLocaleString()}`;
  document.getElementById("shipping").textContent = `LE ${shipping.toLocaleString()}`;
  document.getElementById("total").textContent = `LE ${total.toLocaleString()}`;
});

function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}
