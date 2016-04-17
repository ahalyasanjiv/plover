
jQuery('button.newGoal').click(function(event) {
  alert("HI");
  event.preventDefault();
  var obj = document.getElementById("newObjective").value;
  var ded = document.getElementById("newDeadline").value;
  if(obj == "" || ded == "") {
    alert("Objective text field is empty");
  } else {
    var newRow = jQuery('<tr><td>'+obj+'</td><td>'+ded+'</td></tr>');
    jQuery('table.objectTable').append(newRow);
    console.log("carried out");
  }
});