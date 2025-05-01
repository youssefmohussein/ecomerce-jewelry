document.addEventListener("DOMContentLoaded", function () {
    const productImage = document.getElementById("productImage");
    const colorSwatches = document.querySelectorAll(".color-swatch");

    const imagePaths = {
        "WOBR": "../images/rings-page/Small Oval Buckle Ring white.webp",
        "BOBR": "../images/rings-page/Small Oval Buckle Ring.webp",
        "BLOBR": "../images/rings-page/Small Oval Buckle Ring, Black.webp"
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
