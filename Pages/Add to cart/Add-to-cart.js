document.addEventListener("DOMContentLoaded", function () {
    updateTotal();

    document.querySelectorAll(".unit input").forEach(input => {
        input.addEventListener("change", function () {
            if (this.value < 0) this.value = 0;
            updateTotal();
        });
    });

    document.querySelectorAll(".btn-area").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".box").remove();
            updateTotal();
        });
    });
});

function updateTotal() {
    let subtotal = 0;
    document.querySelectorAll(".box").forEach(box => {
        let priceText = box.querySelector(".product-price").textContent;
        let price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        let quantity = parseInt(box.querySelector(".unit input").value);
        subtotal += price * quantity;
    });

    let tax = subtotal * 0.15;
    let shipping = subtotal > 0 ? 5000 : 0;
    let total = subtotal + tax + shipping;

    document.querySelector(".right-bar p:nth-child(1) span:last-child").textContent = `LE ${subtotal.toLocaleString()}`;
    document.querySelector(".right-bar p:nth-child(3) span:last-child").textContent = `LE ${tax.toLocaleString()}`;
    document.querySelector(".right-bar p:nth-child(5) span:last-child").textContent = `LE ${shipping.toLocaleString()}`;
    document.querySelector(".right-bar p:nth-child(7) span:last-child").textContent = `LE ${total.toLocaleString()}`;
}
