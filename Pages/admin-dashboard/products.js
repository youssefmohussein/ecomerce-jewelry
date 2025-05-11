document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".Edit");

  editButtons.forEach(button => {
    button.addEventListener("click", function () {
      const row = this.closest("tr");

      if (this.innerText === "Edit") {
        for (let i = 1; i <= 4; i++) { 
          const cell = row.cells[i];
          const value = cell.innerText;
          cell.innerHTML = `<input type="text" value="${value}" />`;
        }
        this.innerText = "Save";
      } else {
        for (let i = 1; i <= 4; i++) {
          const input = row.cells[i].querySelector("input");
          row.cells[i].innerText = input.value;
        }
        this.innerText = "Edit";
      }
    });
  });
});



document.getElementById('category-select').addEventListener('change', function () {
  const selected = this.value.toLowerCase();
  const rows = document.querySelectorAll('#product-table-body tr');

  rows.forEach(row => {
    const category = row.cells[2].textContent.toLowerCase();

    
    if (selected === "" || category === selected) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

  function openForm() {
    document.getElementById("collectionModal").style.display = "block";
  }

  function closeForm() {
    document.getElementById("collectionModal").style.display = "none";
  }

  function addCollection() {
    const imageUrl = document.getElementById("collectionImage").value;
    const name = document.getElementById("collectionName").value;

    if (!imageUrl || !name) {
      alert("Please fill in both fields.");
      return;
    }

    console.log("Collection added:", { name, imageUrl });

    // Clear form
    document.getElementById("collectionImage").value = "";
    document.getElementById("collectionName").value = "";

    // Close modal
    closeForm();
  }

  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("collectionModal");
    if (event.target === modal) {
      closeForm();
    }
  }