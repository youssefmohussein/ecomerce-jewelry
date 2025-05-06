// Function to toggle wishlist status
function toggleWishlist(button) {
    const productId = button.getAttribute('data-product-id');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.includes(productId)) {
        // Remove from wishlist
        wishlist = wishlist.filter(id => id !== productId);
        button.classList.remove('active');
        // Reset both fill and stroke
        const svg = button.querySelector('svg');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
    } else {
        // Add to wishlist
        wishlist.push(productId);
        button.classList.add('active');
        // Set both fill and stroke to red
        const svg = button.querySelector('svg');
        svg.setAttribute('fill', 'red');
        svg.setAttribute('stroke', 'red');
    }
    
    // Save updated wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Function to initialize wishlist buttons on page load
function initWishlistButtons() {
    // Get stored wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Find all wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(wishlistBtn => {
        if (wishlistBtn) {
            const productId = wishlistBtn.getAttribute('data-product-id');
            const svg = wishlistBtn.querySelector('svg');
            
            // Only mark as active if this product is in the wishlist
            if (wishlist.includes(productId)) {
                wishlistBtn.classList.add('active');
                svg.setAttribute('fill', 'red');
                svg.setAttribute('stroke', 'red');
            } else {
                wishlistBtn.classList.remove('active');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('stroke', 'currentColor');
            }
        }
    });
}

// Initialize wishlist buttons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initWishlistButtons();
});