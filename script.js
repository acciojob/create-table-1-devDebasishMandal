// let table=document.getElementById("sampleTable");
function insert_Row() {
 //    let row =document.createElement("tr");
	
	// row.innerHTML=`<td>New Cell1</td>
	// <td>New Cell2</td>`
	// table.prepend(row);
	  var table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0) of the table
    var newRow = table.insertRow(0);

    // Insert cells into the new row
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);

    // Set the content of the cells
    leftCell.innerHTML = "New Cell1";
    rightCell.innerHTML = "New Cell2";
	
}
