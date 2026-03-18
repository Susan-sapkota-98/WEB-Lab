function addRow() {

  var name = document.getElementById("nameInput").value;
  var age = document.getElementById("ageInput").value;

  if (name == "" || age == "") {
    alert("please enter name and age");
    return;
  }

  var table = document.getElementById("myTable");

  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";

  // clear input after adding
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";

}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}