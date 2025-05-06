document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".add");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Clear any hardcoded content
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((product, index) => {
      const box = document.createElement("div");
      box.className = "box";

      box.innerHTML = `
        <img src="../images/placeholder.png" alt="Product Image">
        <div class="container product-info">
          <p class="product1-name">Product: ${product.name}</p>
          <p class="product-price">Price: LE ${product.price.toLocaleString()}</p>
          <p class="unit">Item: <input type="number" value="${product.quantity}" data-index="${index}"></p>
          <div class="btn-area"><i class="fa fa-trash" data-index="${index}"></i></div>
        </div>
      `;

      cartContainer.appendChild(box);
    });
  }

  updateTotal();

  // Quantity change
  cartContainer.addEventListener("change", function (e) {
    if (e.target.matches(".unit input")) {
      let index = parseInt(e.target.dataset.index);
      let value = Math.max(1, parseInt(e.target.value));
      e.target.value = value;
      cart[index].quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateTotal();
    }
  });

  // Delete item
  cartContainer.addEventListener("click", function (e) {
    if (e.target.matches(".fa-trash")) {
      let index = parseInt(e.target.dataset.index);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload(); // Reload to re-render cart
    }
  });
});

function updateTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subtotal = 0;

  cart.forEach(product => {
    subtotal += product.price * product.quantity;
  });

  let tax = subtotal * 0.15;
  let shipping = subtotal > 0 ? 5000 : 0;
  let total = subtotal + tax + shipping;

  document.querySelector(".right-bar p:nth-child(2) span:last-child").textContent = `LE ${subtotal.toLocaleString()}`;
  document.querySelector(".right-bar p:nth-child(4) span:last-child").textContent = `LE ${tax.toLocaleString()}`;
  document.querySelector(".right-bar p:nth-child(6) span:last-child").textContent = `LE ${shipping.toLocaleString()}`;
  document.querySelector(".right-bar p:nth-child(8) span:last-child").textContent = `LE ${total.toLocaleString()}`;
}
