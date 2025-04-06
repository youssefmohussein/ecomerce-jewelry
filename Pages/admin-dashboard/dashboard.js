function toggleStatus(element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      element.classList.add('inactive');
      element.textContent = 'Deactive';
    } else {
      element.classList.remove('inactive');
      element.classList.add('active');
      element.textContent = 'Active';
    }
  }
 
  function deleteRow(element) {
    var row = element.closest('tr');  // Get the closest row (tr)
    row.remove();  // Remove the row from the table
  }