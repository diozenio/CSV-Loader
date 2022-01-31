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
        var secretaria = rowCells[(rowCell+3)];
        secretaria = secretaria.replace(/ /g, "_");

        switch(secretaria) {
          case "SECRETARIA_DE_ESTADO_DA_EDUCAÇÃO":
            custeio[0] = result;
            break;
          
          case "SECRETARIA_DE_ESTADO_DA_SAÚDE":
            custeio[1] = result;
            break;

          case "SECRETARIA_DE_ESTADO_DA_SEGURANÇA_PÚBLICA":
            custeio[2] = result;
            break;
          
          case "SECRETARIA_DE_ESTADO_DA_COMUNICAÇÃO":
            custeio[3] = result;
            break;
        }

        desenharGrafico();
      }
    }
  }
}
