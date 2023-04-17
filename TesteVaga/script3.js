const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, faturamento) => total + faturamento);
  
  for (const estado in faturamentoPorEstado) {
    const faturamento = faturamentoPorEstado[estado];
    const percentual = (faturamento / totalFaturamento) * 100;
    document.write(`${estado}: ${percentual.toFixed(2)}% <br>`);
  }