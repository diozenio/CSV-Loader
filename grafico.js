google.charts.load("current", { packages: ["corechart"] });

function desenharGrafico() {
  var tabela = new google.visualization.DataTable();
  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "custeios");
  tabela.addRows([
    ["Comunicação", custeio[0]],
    ["Educação", custeio[1]],
    ["Saúde", custeio[2]],
    ["Segurança", custeio[3]],
  ]);

  var grafico = new google.visualization.ColumnChart(
    document.getElementById("graficoPizza")
  );
  const options = {
      title: "Custeios",
      height: 500,
      width: 700,
  }
  grafico.draw(tabela, options);
}

google.charts.setOnLoadCallback(desenharGrafico);
