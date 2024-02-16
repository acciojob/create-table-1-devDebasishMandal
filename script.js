let table=document.getElementById("sampleTable");
function insert_Row() {
    let row =document.createElement("tr");
	row.innerHTML=`<td>New Cell1</td>
	<td>New Cell2</td>`
	table.prepend(row);
	
}
