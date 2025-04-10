document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const quantityInput = document.querySelector('.quantity-input');

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addToCart");
    const quantityInput = document.querySelector(".quantity-input");

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

        // Check if product is already in the cart
        const existingProductIndex = cart.findIndex(p => p.name === productName);
        if (existingProductIndex !== -1) {
            // Update the quantity
            cart[existingProductIndex].quantity += quantity;
        } else {
            // Add new product
            const product = {
                name: productName,
                price: price,
                quantity: quantity
            };
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart!");
    });

    // Quantity +/- button logic
    document.querySelector(".increase-btn").addEventListener("click", () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    document.querySelector(".decrease-btn").addEventListener("click", () => {
        if (parseInt(quantityInput.value) > 0) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});
