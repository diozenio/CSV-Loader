// Os arquivos CSV's são carregados assim que a página carrega, chamando a função que armazenará os valores desejados

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
  
  $.ajax({
    url: "CSV/RepassesMunicipios.csv",
    dataType: "text",
  }).done(recursos);

  $.ajax({
    url: "CSV/Beneficiados.csv",
    dataType: "text",
  }).done(beneficiados);

  
};

// função que remove os pontos e as vírgulas da string, transformando a váriavel em float
function converter(string) {
    var result = string.replace(/\./g, "");
    result = result.replace(/,/g, ".");
    result = parseFloat(result);
    return result;
  }