var municipios = [];
let valorFloat;
let valorString;
let sortedMunicipios;

function recursos(data) {
  // array que recebe cada linha do csv em uma posição diferente
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    // cada célula é separada pelo sinal de ";" e armazenada em outro array
    var rowCells = allRows[singleRow].split(";");
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      // O "for" percorre o array procurando os valores totais e o nome do favorecido.
      if (rowCells[rowCell] != "TOTAL_VALOR" && rowCell === 1) {
        // O valor total é armazenado em forma de string e também convertido pra o formato float, para facilitar a verificação
        valorFloat = converter(rowCells[rowCell]);
        valorString = rowCells[rowCell];
      } else if (rowCells[rowCell] != "NOME_FAVORECIDO" && rowCell === 4) {
        // O nome do município também é armazenado
        municipios.push({ nome: rowCells[rowCell], total : valorFloat, reais: valorString });
      }
    }
  }


  // "sortedMunicipios" receberá o array de municipios de forma decrescente 
  sortedMunicipios = municipios.sort((m1, m2) =>
    m1.total < m2.total ? 1 : m1.total > m2.total ? -1 : 0
  );
  listarRecursos();
}

// Esta função exibe a lista dos 10 municipios que mais receberam recursos
function listarRecursos() {
  var lista = "<ol>";
  for (let index = 0; index < 10; index++) {
    lista += "<li> " +sortedMunicipios[index].nome +": R$" +sortedMunicipios[index].reais+ "</li>";
  }
  lista += "</ol>"
  $(".listaRecursos").append(lista);
}