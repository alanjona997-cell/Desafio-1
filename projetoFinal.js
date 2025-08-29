const readline = require('readline-sync');

let cesta = [];
let formaSelecionada = null;
let sair = false;

while (!sair) {
  console.log('\n===============================================================');
  console.log('|               Mercado Cinco Estrelas ★★★★★                  |');
  console.log('===============================================================\n');

  console.log("MENU DO MERCADO");
  console.log("1 - Adicionar produto ao carrinho");
  console.log("2 - Ver carrinho");
  console.log("3 - Remover produto do carrinho");
  console.log("4 - Ver resumo da compra");
  console.log("5 - Escolher forma de pagamento");
  console.log("6 - Sair");

  let opcoes = readline.questionInt('Digite o número da opção desejada: ');

  switch (opcoes) {
    case 1:
      let continuar = true;
      console.log('\n================================================================');
      console.log('|                    Adicionar produtos à cesta                |');
      console.log('================================================================\n');
      while (continuar) {
        let nome = readline.question("Digite o nome do produto: ");
        let preco = readline.questionFloat("Digite o preço do produto: ");
        if (nome.trim() === '' || preco < 0) {
          console.log("Produto inválido. Tente novamente.");
          continue;
        }
        cesta.push({ nome, preco });

        let resposta = readline.question("Deseja adicionar mais produtos? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
          continuar = false;
        }
      }
      break;

    case 2:
      console.log('\n==================================================================');  
      console.log('|                       Produtos na cesta                        |');
      console.log('==================================================================\n');
      if (cesta.length === 0) {
        console.log("Carrinho vazio.");
      } else {
        cesta.forEach((item, i) => {
          console.log(`${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });

        let finalizar = readline.question("\nDeseja finalizar a compra agora? (s/n): ");
        if (finalizar.toLowerCase() === 's') {
          let total = cesta.reduce((soma, item) => soma + item.preco, 0);
          console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);
          if (formaSelecionada) {
            console.log(`Forma de pagamento: ${formaSelecionada}`);
          } else {
            console.log("⚠️ Forma de pagamento ainda não selecionada.");
            console.log("Você pode escolher a forma de pagamento na opção 5 do menu.");
          }
        }
      }

      readline.question("\nPressione Enter para continuar...");
      break;

    case 3:
      console.log('\n==================================================================');  
      console.log('|                   Remover produto do carrinho                  |');
      console.log('==================================================================\n');
      if (cesta.length === 0) {
        console.log("Carrinho vazio.");
      } else {
        cesta.forEach((item, i) => {
          console.log(`${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });

        let indice = readline.questionInt("Digite o número do produto que deseja remover: ");
        if (indice >= 1 && indice <= cesta.length) {
          let removido = cesta.splice(indice - 1, 1);
          console.log(`Produto "${removido[0].nome}" removido com sucesso.`);
        } else {
          console.log("Número inválido.");
        }
      }
      break;

    case 4:
      console.log('\n==================================================================');  
      console.log('|                        Resumo da compra                        |');
      console.log('==================================================================\n');
      if (cesta.length === 0) {
        console.log("Carrinho vazio.");
      } else {
        cesta.forEach((item, i) => {
          console.log(`${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });

        let total = cesta.reduce((soma, item) => soma + item.preco, 0);
        console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);

        if (formaSelecionada) {
          console.log(`Forma de pagamento escolhida: ${formaSelecionada}`);
        } else {
          console.log("Forma de pagamento ainda não selecionada.");
        }
      }

      readline.question("\nPressione Enter para voltar ao menu...");
      break;

    case 5:
      let opcoesDePagamento = ["Crédito", "Débito", "Pix", "Dinheiro em espécie"];
      console.log('\n==================================================================');
      console.log('|               Formas de pagamento disponíveis:                 |');
      console.log('==================================================================\n');
      opcoesDePagamento.forEach((opcao, i) => {
        console.log(`${i + 1} - ${opcao}`);
      });

      let formaDePagamento = readline.questionInt("Qual a sua forma de pagamento? (Digite o número): ");
      if (formaDePagamento >= 1 && formaDePagamento <= opcoesDePagamento.length) {
        formaSelecionada = opcoesDePagamento[formaDePagamento - 1];
        console.log(`Forma de pagamento selecionada: ${formaSelecionada}`);

        let total = cesta.reduce((soma, item) => soma + item.preco, 0);

        if (formaSelecionada === "Crédito") {
          let parcelar = readline.question("Deseja parcelar o pagamento? (s/n): ");
          if (parcelar.toLowerCase() === 's') {
            let parcelas = readline.questionInt("Em quantas parcelas? ");
            if (parcelas > 1) {
              let valorParcela = total / parcelas;
              console.log(`Pagamento parcelado em ${parcelas}x de R$ ${valorParcela.toFixed(2)}.`);
            } else {
              console.log("Número de parcelas inválido. Pagamento será feito à vista.");
            }
          } else {
            console.log("Pagamento no crédito à vista.");
          }
        }

        console.log("\nPagamento realizado com sucesso!");

        let encerrar = readline.question("Deseja sair do sistema? (s/n): ");
        if (encerrar.toLowerCase() === 's') {
          console.log("\nObrigado por comprar no Mercado Cinco Estrelas!");
          sair = true;
        }
      } else {
        console.log("Forma de pagamento inválida.");
      }
      break;

    case 6:
      console.log("\nObrigado por usar o sistema do Mercado Cinco Estrelas!");
      sair = true;
      break;

    default:
      console.log("\nOpção inválida. Tente novamente.");
  }
}
