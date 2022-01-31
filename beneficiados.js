var valorEmpenhado;
var nomesBeneficiados = [];

function beneficiados(data) {
    var allRows = data.split(/\r?\n|\r/);
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      var rowCells = allRows[singleRow].split(";");

      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        if (rowCell === 3 && rowCells[rowCell] != "TOTAL_EMPENHADO") {
          valorEmpenhado = converter(rowCells[rowCell]);
          valorReais = rowCells[rowCell];
        } else if (rowCell === 6 && rowCells[rowCell] != "NOME_FAVORECIDO") {
          var nomeFavorecido = rowCells[rowCell];
          nomesBeneficiados.push({nome: nomeFavorecido, valor: valorEmpenhado, reais: valorReais});
        }
      }
    }

    sortedBeneficiados = nomesBeneficiados.sort((b1, b2) =>
    b1.valor < b2.valor ? 1 : b1.valor > b2.valor ? -1 : 0
  );
  listarBeneficiados();
}

function listarBeneficiados() {
  var lista = "<ol>";
  for (let index = 0; index < 10; index++) {
    lista += "<li> " +sortedBeneficiados[index].nome +": R$" +sortedBeneficiados[index].reais+ "</li>";
  }
  lista += "</ol>"
  $(".listaBeneficiados").append(lista);
}