document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <nav class="navbar">
            <div class="navigation">
                <a href="#">Shop</a>
                <a href="../About us/about.html">About Us</a>
            </div>
            <a href="../Home page/homepage.html" class="logo">
                <h1>Vita</h1>
            </a>
            <div class="icons">
                <a href="../login page/login page.html"><i class="fa-regular fa-user"></i></a>
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </nav>
    `;
    const productImage = document.getElementById("productImage");
    const colorSwatches = document.querySelectorAll(".color-swatch");

    const imagePaths = {
        "gold": "../Home page/home-images/rings/gold.png",
        "green": "../Home page/home-images/rings/darkgreen.png",
        "black": "../Home page/home-images/rings/black.png"
    };

    colorSwatches.forEach(swatch => {
        swatch.addEventListener("click", function () {
            let selectedColor = this.dataset.color;

            // Remove 'active' class from all swatches
            colorSwatches.forEach(s => s.classList.remove("active"));
            this.classList.add("active");

            // Smooth fade-out and change image
            productImage.style.opacity = "0";
            setTimeout(() => {
                productImage.src = imagePaths[selectedColor];
                productImage.style.opacity = "1";
            }, 300);
        });
    });
});
