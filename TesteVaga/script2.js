const faturamentoDiario = [50, 60, 70, 0, 80, 90, 100, 0, 110, 120, 130, 140, 150, 160, 170, 180, 0, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];

var menorFaturamento = faturamentoDiario[0];
var maiorFaturamento = faturamentoDiario[0];
var somaFaturamento = 0;
var diasComFaturamentoAcimaDaMedia = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }

  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }

  if (faturamentoDiario[i] > 0) {
    somaFaturamento += faturamentoDiario[i];
  }
}

const mediaMensal = somaFaturamento / faturamentoDiario.filter((valor) => valor > 0).length;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaMensal) {
    diasComFaturamentoAcimaDaMedia++;
  }
}

document.write(`Menor faturamento: R$${menorFaturamento}`);
document.write(`<br> Maior faturamento: R$${maiorFaturamento}`);
document.write(`<br> Dias com faturamento acima da média mensal: ${diasComFaturamentoAcimaDaMedia}`);