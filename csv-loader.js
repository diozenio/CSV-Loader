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
      }).done(successFunction2);
  };