// Wait until the document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Get the search input field
    const searchInput = document.getElementById("search");

    // Get the status filter dropdown
    const statusFilter = document.getElementById("status-filter");

    // Select all rows inside the orders table (excluding the header row)
    const tableRows = document.querySelectorAll(".orders-table tbody tr");

    // Function to filter orders
    function filterOrders() {
        // Convert the search input to lowercase for case-insensitive search
        const searchText = searchInput.value.toLowerCase();

        // Convert the selected status to lowercase for comparison
        const selectedStatus = statusFilter.value.toLowerCase();

        // Loop through each row dynamically, checking for existing cells
        tableRows.forEach(row => {
            const cells = row.getElementsByTagName("td"); // Get all table cells in the row

            // Ensure the row has enough cells before accessing them
            if (cells.length > 0) {
                const orderId = cells[0].textContent.toLowerCase(); // Order ID column
                const customerName = cells[1].textContent.toLowerCase(); // Customer Name column
                const orderStatus = cells[cells.length - 2].textContent.toLowerCase(); // Status column (2nd last column)

                // Check if search input matches Order ID or Customer Name
                const matchesSearch = orderId.includes(searchText) || customerName.includes(searchText);

                // Check if selected status matches Order Status, or allow all if no filter is selected
                const matchesStatus = selectedStatus === "" || orderStatus.includes(selectedStatus);

                // Show or hide the row based on matching criteria
                row.style.display = matchesSearch && matchesStatus ? "" : "none";
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener("input", filterOrders);

    // Event listener for status filter dropdown
    statusFilter.addEventListener("change", filterOrders);
});
