var municipios = [];
let valorFloat;
let valorString;
let sortedMunicipios;

function recursos(data) {
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(";");
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (rowCells[rowCell] != "TOTAL_VALOR" && rowCell === 1) {
        valorFloat = converter(rowCells[rowCell]);
        valorString = rowCells[rowCell];
      } else if (rowCells[rowCell] != "NOME_FAVORECIDO" && rowCell === 4) {
        municipios.push({ nome: rowCells[rowCell], total : valorFloat, reais: valorString });
      }
    }
  }

  sortedMunicipios = municipios.sort((m1, m2) =>
    m1.total < m2.total ? 1 : m1.total > m2.total ? -1 : 0
  );
  listarRecursos();
}

function listarRecursos() {
  var lista = "<ol>";
  for (let index = 0; index < 10; index++) {
    lista += "<li> " +sortedMunicipios[index].nome +": R$" +sortedMunicipios[index].reais+ "</li>";
  }
  lista += "</ol>"
  $(".lista").append(lista);
}