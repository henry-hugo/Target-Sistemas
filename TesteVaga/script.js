function fibonacci(numero) {
  // Inicia os dois primeiros valores da sequência
  var valorAnterior = 0;
  var valorAtual = 1;

  // Se o número informado for 0 ou 1, ele já está na sequência de Fibonacci
  if (numero === 0 || numero === 1) {
    return `${numero} pertence à sequência de Fibonacci.`;
  }

  // Enquanto o valor atual na sequência for menor ou igual ao número informado
  while (valorAtual <= numero) {
    // Se o valor atual for igual ao número informado, ele pertence à sequência de Fibonacci
    if (valorAtual === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Atualiza os valores anteriores e atuais da sequência de Fibonacci
    const proximoValor = valorAnterior + valorAtual;
    valorAnterior = valorAtual;
    valorAtual = proximoValor;
  }

  // Se o número informado não pertencer à sequência de Fibonacci, retorne esta mensagem
  return `${numero} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
document.write(fibonacci(Math.floor(Math.random() *  987)));

document.write("<br>"+fibonacci(Math.floor(Math.random() *  987)));

document.write("<br>"+fibonacci(Math.floor(Math.random() *  987)));

document.write("<br>"+fibonacci(21));