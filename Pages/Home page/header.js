document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <nav class="navbar">
            <div class="navigation">
                <a href="#">Shop</a>
                <a href="../About us/about.html">About Us</a>
            </div>
            <a href="../Home page/homepage.html" class="logo">
                <h1>VELORA JEWEL</h1>
                <h2>Paris</h2>
            </a>
            <div class="icons">
                <a href="../login page/login page.html"><i class="fa-solid fa-user"></i></a>
                <a href="../Add to cart/Add-to-cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
            </div>
        </nav>
    `;

    let lastScrollTop = 0; // Stores the last scroll position
    const navbar = document.querySelector(".navbar"); // Selects the navbar element

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset;
        // Gets the current vertical scroll position

        if (currentScroll > lastScrollTop) {
            navbar.classList.add("scrolled"); // Add background when scrolling down
        } else if (currentScroll === 0) {
            navbar.classList.remove("scrolled"); // Remove background when at the top
        }


    });


    const productImage = document.getElementById("productImage");
    const colorSwatches = document.querySelectorAll(".color-swatch");

    const imagePaths = {
        "white": "../images/rings-page/Small Oval Buckle Ring white.webp",
        "green": "../images/rings-page/Small Oval Buckle Ring.webp",
        "black": "../images/rings-page/Small Oval Buckle Ring, Black.webp"
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

    document.getElementById("footer").innerHTML = `
                <footer class="footer">
        <!-- Heritage Section -->
        <div class="heritage">
            <div class="logo">✦</div>
            <h2 class="brand">VELORA JEWEL</h2>
            <p class="tagline">PARIS • 1888</p>
            <div class="separator">
                <span>◆</span>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="footer-content">
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="../products-page/earings-page.html">Earrings</a></li>
                    <li><a href="../products-page/ring-page.html">Rings</a></li>
                    <li><a href="../products-page/bracelets-page.html">Bracalet</a></li>
                    <li><a href="../products-page/necklace-page.html">Necklace</a></li>
                </ul>
            </div>


            <div class="footer-section">
                <h3>Contact</h3>
                <ul class="contact-info">
                    <li>13 Place Vendôme</li>
                    <li>75001 Paris, France</li>
                    <li>+33 1 42 61 58 58</li>
                    <li>contact@maisonlumiere.com</li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Services</h3>
                <ul>
                    <li><a href="../refund policy/refundpolicy.html">Refund-Policy</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="../contact us/contactus.html">Contact-US</a></li>
                    <li><a href="../faq/faq.html">FAQ</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Newsletter</h3>
                <p>Subscribe to receive our latest collections and private events.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Pinterest</a>
            </div>
            <div class="copyright">
                © 2024 VELORA. All rights reserved.
            </div>

        </div>
    </footer>`;


});




/* malak js scoller */
window.onscroll = function () {
    var button = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { // lw nzl akter mn 200 px , lw et7a22 yb2a e3ml display ll button 
         // lkol element in the body || w el tani llgzr el asas ll safha kolaha 
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scroll-to-top").addEventListener("click", function () { // lma badoos 3la el button da by3ml el function 
    window.scrollTo({ top: 0, behavior: "smooth" }); // b5ali el haraka na3ma msh fag2a + eno yroo7 ll top 
}); // el window di 34an tt7akm feeh 



