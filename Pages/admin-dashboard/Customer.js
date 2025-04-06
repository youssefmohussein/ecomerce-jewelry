function searchTable() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var table = document.querySelector(".table table");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var matchFound = false;

        for (var j = 0; j < cells.length; j++) {
            var cellText = cells[j].textContent || cells[j].innerText;

            if (cellText.toLowerCase().indexOf(input) > -1) {
                matchFound = true;
                break;
            }
        }

        if (matchFound) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}


