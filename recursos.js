var total = [];

function successFunction2(data) {
  var allRows = data.split(/\r?\n|\r/);

  var table = "<table>";
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += "<thead>";
      table += "<tr>";
    } else {
      table += "<tr>";
    }
    var rowCells = allRows[singleRow].split(";");
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (rowCell === 1 || rowCell === 4) {
        if (singleRow === 0) {
          table += "<th>";
          table += rowCells[rowCell];
          table += "</th>";
        } else {
          table += "<td>";
          table += rowCells[rowCell];
          table += "</td>";
        }
        if (rowCell === 1 && rowCells[rowCell] != "TOTAL_VALOR") {
          total.push(rowCells[rowCell]);
        }
      }
    }
    if (singleRow === 0) {
      table += "</tr>";
      table += "</thead>";
      table += "<tbody>";
    } else {
      table += "</tr>";
    }
  }
  table += "</tbody>";
  table += "</table>";
  console.log(total);
  $("body").append(table);
}
