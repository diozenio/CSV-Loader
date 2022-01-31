google.charts.load("current", { packages: ["corechart"] });

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
      height: 500,
      width: 700,
  }
  grafico.draw(tabela, options);
}

google.charts.setOnLoadCallback(desenharGrafico);