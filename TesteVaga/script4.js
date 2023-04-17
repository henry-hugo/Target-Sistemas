// Defina a string a ser invertida
let str = "Hugo Henrique Oliveira";

// Variável para armazenar a string invertida
let strInvertida = "";

// Percorre a string de trás para frente e adiciona cada caractere na variável strInvertida
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

// Imprime a string invertida
document.write(strInvertida);
