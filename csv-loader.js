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

  function order(number) {
    console.log(number);
    number.sort(); // aqui ele vai ordernar do menor para o maior
    console.log(number);
    number.reverse(); // aqui ele vai inverter as posições fazendo o efeito desejado
    console.log(number);
    return number;
  }
  
  function converter(string) {
    var result = string.replace(/\./g, "");
    result = result.replace(/,/g, ".");
    result = parseFloat(result);
    return result;
  }
  