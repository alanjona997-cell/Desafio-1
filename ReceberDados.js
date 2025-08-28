const readline = require('readline-sync');

let cesta = [];
let continuar = true;

console.log("=== Adicionar produtos à cesta ===");

while (continuar) {
  let nome = readline.question("Digite o nome do produto: ");
  let preco = readline.questionFloat("Digite o preco do produto: ");

  cesta.push({ nome: nome, preco: preco });

  let resposta = readline.question("Deseja adicionar mais produtos? (s/n): ");
  if (resposta.toLowerCase() !== 's') {
    continuar = false;
  }
}

console.log("\n=== Produtos na cesta ===");

let total = 0;
for (let i = 0; i < cesta.length; i++) {
  let item = cesta[i];
  console.log(`${item.nome} - R$ ${item.preco.toFixed(2)}`);
  total += item.preco;
}

console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);
