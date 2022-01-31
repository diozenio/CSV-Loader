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

function converter(string) {
    var result = string.replace(/\./g, "");
    result = result.replace(/,/g, ".");
    result = parseFloat(result);
    return result;
  }