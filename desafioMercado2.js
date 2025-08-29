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

    let opcoes = readline.questionInt('Digite o numero da opcao desejada: ');

    switch (opcoes) {
        case 1:
            let continuar = true;
            console.log("\n=== Adicionar produtos à cesta ===");
            while (continuar) {
                let nome = readline.question("Digite o nome do produto: ");
                let preco = readline.questionFloat("Digite o preco do produto: ");
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
            let total = 0;
            for (let i = 0; i < cesta.length; i++) {
                total += cesta[i].preco;
            }
            console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`);

            break;


        case 4:
            let opcoesDePagamento = ["Crédito", "Débito", "Pix", "Dinheiro em espécie"];
            console.log("\nFormas de pagamento disponíveis:");
            for (let i = 0; i < opcoesDePagamento.length; i++) {
                console.log(`${i + 1} - ${opcoesDePagamento[i]}`);
            }

            let formaDePagamento = readline.question("Qual a sua forma de pagamento? (Digite o número): ");

            // calcular o total da compra novamente
            let totalCompra = 0;
            for (let i = 0; i < cesta.length; i++) {
                totalCompra += cesta[i].preco;
            }

            switch (formaDePagamento) {
                case "1": // Crédito
                    console.log("\n💳 Crédito selecionado.");
                    let parcelar = readline.question("Deseja parcelar? (s/n): ");

                    if (parcelar.toLowerCase() === "s") {
                        let parcelas = readline.questionInt("Em quantas vezes deseja parcelar? ");
                        let valorParcela = totalCompra / parcelas;
                        console.log(`\nCompra realizada no crédito em ${parcelas}x de R$ ${valorParcela.toFixed(2)}.`);
                    } else {
                        console.log(`\nCompra realizada no crédito à vista. Total: R$ ${totalCompra.toFixed(2)}.`);
                    }
                    break;

                case "2": // Débito
                    console.log("\n💳 Débito selecionado. Insira o cartão na maquineta e digite a senha.");
                    break;

                case "3": // Pix
                    console.log("\n🔗 Pix selecionado. Escaneie o QR Code para efetuar o pagamento.");
                    break;

                case "4": // Espécie
                    console.log("\n💵 Dinheiro selecionado. Por favor, se dirija ao atendente do caixa ao lado.");
                    break;

                default:
                    console.log("\n❌ Forma de pagamento inválida.");
            }
            break;
    }
}
