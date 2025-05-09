document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById('dropdownWrapper');
  const searchBtn = document.getElementById('searchBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Open/Toggle Dropdown
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from reaching the document
    wrapper.classList.toggle('show');
  });

  // Close on close icon
  closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('show');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target) && !searchBtn.contains(e.target)) {
      wrapper.classList.remove('show');
    }
  });
});

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




document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('text');

  searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-container > div');

    products.forEach(product => {
      const title = product.querySelector('p').textContent.toLowerCase();

      if (title.includes(filter)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

