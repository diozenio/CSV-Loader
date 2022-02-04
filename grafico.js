// responsividade do gráfico ao alterar o tamanho da tela
$(window).resize(function () {
  width = $(".exibirGrafico").width();
  height = $(".exibirGrafico").height();
  desenharGrafico();
});

var height = $(".exibirGrafico").height();
var width = $(".exibirGrafico").width();
google.charts.load("current", { packages: ["corechart"] });

// A função desenharGrafico utiliza uma biblioteca do Google para criar um gráfico de coluna

function desenharGrafico() {
  var tabela = google.visualization.arrayToDataTable([
    ["Element", "Recursos", { role: "style" }],
    ["Educação", custeio[0], "#76A7FA"],
    ["Saúde", custeio[1], "silver"],
    ["Segurança", custeio[2], "gold"],
    ["Comunicação", custeio[3], "color: #e5e4e2"],
  ]);

  var grafico = new google.visualization.ColumnChart(
    document.getElementById("grafico")
  );
  const options = {
    title: "Custeios",
    height: height,
    width: width,
  };
  grafico.draw(tabela, options);
}

google.charts.setOnLoadCallback(desenharGrafico);
