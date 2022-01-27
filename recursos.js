var municipios = [];
let valor;
let sortedMunicipios;

function successFunction2(data) {
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(";");
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (rowCells[rowCell] != "TOTAL_VALOR" && rowCell === 1) {
        valor = converter(rowCells[rowCell]);
      } else if (rowCells[rowCell] != "NOME_FAVORECIDO" && rowCell === 4) {
        municipios.push({ nome: rowCells[rowCell], total : valor });
      }
    }
  }

  sortedMunicipios = municipios.sort((m1, m2) =>
    m1.total < m2.total ? 1 : m1.total > m2.total ? -1 : 0
  );
  console.log(sortedMunicipios);
}

function listarRecursos() {
}

// function successFunction2(data) {
//   var allRows = data.split(/\r?\n|\r/);

//   var table = "<table>";
//   for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
//     if (singleRow === 0) {
//       table += "<thead>";
//       table += "<tr>";
//     } else {
//       table += "<tr>";
//     }
//     var rowCells = allRows[singleRow].split(";");
//     for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
//       if (rowCell === 1 || rowCell === 4) {
//         if (singleRow === 0) {
//           table += "<th>";
//           table += rowCells[rowCell];
//           table += "</th>";
//         } else {
//           table += "<td>";
//           table += rowCells[rowCell];
//           table += "</td>";
//         }
//         if (rowCell === 1 && rowCells[rowCell] != "TOTAL_VALOR") {
//           total.push(converter(rowCells[rowCell]));
//         }
//       }
//     }
//     if (singleRow === 0) {
//       table += "</tr>";
//       table += "</thead>";
//       table += "<tbody>";
//     } else {
//       table += "</tr>";
//     }
//   }
//   table += "</tbody>";
//   table += "</table>";
//   ordenado = order(total);
//   for (let index = 0; index < ordenado.length; index++) {
//     console.log(ordenado[index]);
//   }
//   $("body").append(table);
// }
