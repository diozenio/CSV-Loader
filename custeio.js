window.onload = function () {
  $.ajax({
    url: "CSV/SecretariaComunicacao.csv",
    dataType: "text",
  }).done(successFunction);

  $.ajax({
    url: "CSV/SecretariaEducacao.csv",
    dataType: "text",
  }).done(successFunction);

  $.ajax({
    url: "CSV/SecretariaSaude.csv",
    dataType: "text",
  }).done(successFunction);

  $.ajax({
    url: "CSV/SecretariaSeguranca.csv",
    dataType: "text",
  }).done(successFunction);
};

var custeio = [];

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);

  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(";");

    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (rowCell === 9 && rowCells[rowCell] != "CUSTEIO") {
        custeio.push(converter(rowCells[rowCell]));
        desenharGrafico();
      }
    }
  }
}

function order(number) {
  number.sort((a, b) => a - b);
  number.reverse();
  return number;
}
