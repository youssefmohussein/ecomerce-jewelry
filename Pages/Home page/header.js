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
});
