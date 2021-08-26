//O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida. O cardápio conta com um hamburguer vegetariano, batata frita com queijo e refrigerante (respectivamente nos valores R$ 35,00, R$ 15,00 e R$ 15,00)


var prompt = require("prompt-sync")();

do{
    var opcao1 = prompt('Digite "S" pata pedir o hambúrguer vegetariano');
    var opcao2 = prompt('Digite "S" para pedir a batata frita com queijo');
    var opcao3 = prompt('Digite "S" para pedir o refrigerante');

    if(opcao1 =="S")
    opcao1 = 35;
    else 
    opcao1 = 0;

    if(opcao2 == "S")
    opcao2 = 15;
    else
    opcao2 = 0;

    if(opcao3 == "S")
    opcao3 = 15;
    else
    opcao3 = 0;

    var precoFinal= (opcao1 + opcao2 + opcao3);
}
while(precoFinal <=0)
console.log("O total conta é" + precoFinal + "reais");


