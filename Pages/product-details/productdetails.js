document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const quantityInput = document.querySelector('.quantity-input');
    const addToCartBtn = document.getElementById("addToCart");

    // Quantity button logic
    increaseBtn.addEventListener('click', function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseBtn.addEventListener('click', function () {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Add to Cart logic
    addToCartBtn.addEventListener("click", function () {
        const productName = document.querySelector(".pdetails h2").textContent.trim();
        const priceText = document.querySelector(".pdetails p").textContent.trim();
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        const quantity = parseInt(quantityInput.value);

        if (quantity <= 0) {
            alert("Please select a quantity greater than 0.");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = cart.findIndex(p => p.name === productName);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            const product = { name: productName, price: price, quantity: quantity };
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to cart page after adding
        window.location.href = "Add-to-cart.html";
    });
});
