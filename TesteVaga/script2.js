// Carrega o arquivo XML
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "dados.xml", false);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML;

// Obtém a lista de dias e valores
const dias = xmlDoc.getElementsByTagName("dia");
const valores = xmlDoc.getElementsByTagName("valor");

// Converte os valores em números e armazena em um array
const valoresNum = [];
for (let i = 0; i < valores.length; i++) {
  valoresNum.push(parseFloat(valores[i].childNodes[0].nodeValue));
}

// Calcula o menor valor de faturamento
const menorValor = Math.min(...valoresNum);

// Calcula o maior valor de faturamento
const maiorValor = Math.max(...valoresNum);

// Calcula a média mensal de faturamento
const somaValores = valoresNum.reduce((acc, val) => acc + val, 0);
const mediaMensal = somaValores / valoresNum.length;

// Calcula o número de dias em que o faturamento foi superior à média mensal
let numDiasAcimaMedia = 0;
for (let i = 0; i < valoresNum.length; i++) {
  if (valoresNum[i] > mediaMensal) {
    numDiasAcimaMedia++;
  }
}

// Imprime os resultados
document.write("Menor valor de faturamento: " + menorValor);
document.write("<br>Maior valor de faturamento: " + maiorValor);
document.write("<br>Número de dias com faturamento acima da média mensal: " + numDiasAcimaMedia);

