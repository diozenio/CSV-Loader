// responsividade do gráfico ao alterar o tamanho da tela
$( window ).resize(function () {
  width = $('.exibirGrafico').width();
  height = $('.exibirGrafico').height();
  desenharGrafico();
});

var height = $('.exibirGrafico').height();
var width = $('.exibirGrafico').width();
google.charts.load("current", { packages: ["corechart"] });


// A função desenharGrafico utiliza uma biblioteca do Google para criar um gráfico de coluna

function desenharGrafico() {
  var tabela = new google.visualization.DataTable();
  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "custeios");
  tabela.addRows([
    ["Educação", custeio[0]],
    ["Saúde", custeio[1]],
    ["Segurança", custeio[2]],
    ["Comunicação", custeio[3]],
  ]);

  var grafico = new google.visualization.ColumnChart(
    document.getElementById("grafico")
  );
  const options = {
      title: "Custeios",
      height: height,
      width: width,
  }
  grafico.draw(tabela, options);
}

google.charts.setOnLoadCallback(desenharGrafico);