const readline = require('readline-sync');

let cesta = [];
let sair = false;

while (!sair) {
  console.log('\n===============================================================');
  console.log('|                            Mercado                          |');
  console.log('|                         Cinco Estrelas                      |');
  console.log('===============================================================\n');

  console.log("MENU DO MERCADO");
  console.log("1 - Adicionar produto ao carrinho");
  console.log("2 - Ver carrinho");
  console.log("3 - Passar no caixa");
  console.log("4 - Escolher forma de pagamento");
  console.log("5 - Sair");

  let opcoes = readline.questionInt('Digite o número da opção desejada: ');

  switch (opcoes) {
    case 1:
      let continuar = true;
      console.log("\n=== Adicionar produtos à cesta ===");
      while (continuar) {
        let nome = readline.question("Digite o nome do produto: ");
        let preco = readline.questionFloat("Digite o preço do produto: ");
        cesta.push({ nome, preco });

        let resposta = readline.question("Deseja adicionar mais produtos? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
          continuar = false;
        }
      }
      break;

    case 2:
      console.log("\n=== Produtos na cesta ===");
      if (cesta.length === 0) {
        console.log("Carrinho vazio.");
      } else {
        cesta.forEach((item, i) => {
          console.log(`${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });
      }
      break;

    case 3:
      let total = cesta.reduce((soma, item) => soma + item.preco, 0);
      console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);
      break;

    case 4:
      let opcoesDePagamento = ["Crédito", "Débito", "Pix", "Dinheiro em espécie"];
      console.log("\nFormas de pagamento disponíveis:");
      for (let i = 0; i < opcoesDePagamento.length; i++) {
        console.log(`${i + 1} - ${opcoesDePagamento[i]}`);
      }

      let formaDePagamento = readline.question("Qual a sua forma de pagamento? (Digite o número): ");
      switch (formaDePagamento) {
        case "1":
          console.log("Crédito - Insira o cartão na maquineta e digite a senha.");
          break;
        case "2":
          console.log("Débito - Insira o cartão na maquineta e digite a senha.");
          break;
        case "3":
          console.log("Pix - Escaneie o QR Code.");
          break;
        case "4":
          console.log("Espécie - Por favor, se dirija ao atendente do caixa ao lado.");
          break;
        default:
          console.log("Forma de pagamento inválida.");
      }
      break;

    case 5:
      console.log("\n👋 Obrigado por usar o sistema do Mercado Cinco Estrelas!");
      sair = true;
      break;

    default:
      console.log("\n❌ Opção inválida. Tente novamente.");
  }
}
