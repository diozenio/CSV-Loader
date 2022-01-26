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
        var result = rowCells[rowCell].replace(/\./g, "");
        result = result.replace(/,/g, ".");
        result = parseFloat(result);
        custeio.push(result);
        desenharGrafico();
      }
    }
  }
}

function order(number) {
  console.log(number);
  number.sort(); // aqui ele vai ordernar do menor para o maior
  console.log(number);
  number.reverse(); // aqui ele vai inverter as posições fazendo o efeito desejado
  console.log(number);
}
