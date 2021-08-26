// Mary foi a lanchonete Java S rapidamente no intervalo de sua aula de Lógica de Programação. A garçonete dispoibilizou o cardápio para a clientes escolher seu lanche. Mary escolheu e lanchou de acordo com sua preferência, sendo lhe apresentada a conta para pagamento no caixa
// Mary foi a lanchonete Java S rapidamente no intervalo de sua aula de Lógica de Programação. A garçonete dispoibilizou o cardápio para a clientes escolher seu lanche. Mary escolheu e lanchou de acordo com sua preferência, sendo lhe apresentada a conta para pagamento no caixa

var prompt = require("prompt-sync")();
console.log("Cardápio Java S");

console.log("Salgados:\n 1- Hamburguer R$10.00\n 2- Pizza Fatia R$7.00\n 3- Salgados R$6.00");
var lanche = prompt("Indique o número da comida escolhida: ");
console.log("Bebidas\n 1-Suco R$6.00\n2-Agua de Coco R$5.00\n3-Água mineral R$3.00\n4-Refrigerante R$6.00");
var bebida = prompt("Indique o número da bebida escolhida:");

var reais;
//valor dos lanches

switch(lanche){ 
 case "1": 
 reais = 10.00;
 break;
 case "2":
 reais = 7.00;
 break;
 case "3":
 reais = 6.00;
 break;

}

//switch bebidas= variavel "reais" referente aos valores dos lanches + valores das bebidas

switch(bebida){
 case "1": 
 conta = reais + 6.00;
 break;
 case "2":
 conta = reais + 5.00;
 break;
 case "3":
 conta = reais + 3.00;
 break;
 case "4":
 conta = reais + 6.00;
 break;
    
   }

console.log("O valor da conta é R$" + conta);


