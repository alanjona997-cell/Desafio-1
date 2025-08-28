let readline = require(`readline-sync`)

let opcoesDePagamento = ["Crédito", "Débito", "pix", "Dinheiro em espécie"];
console.log("Olá,"); 
console.log("Formas de pagamento disponíveis:");
for (let i = 0; i < opcoesDePagamento.length; i++) {
  console.log(`${i + 1} - ${opcoesDePagamento[i]}`);}


let formaDePagamento = readline.question("Qual a sua forma de pagamento? (Digite o numero)");

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
    console.log("Espécie - por favor, se dirigir ao atendente do caixa ao lado");
    break;
}



