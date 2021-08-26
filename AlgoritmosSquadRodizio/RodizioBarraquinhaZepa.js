/*
Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido.
*/

var prompt = require("prompt-sync")();
var refazerPedido = true; 

console.log("Barraquinha do Zepa\nQuerido cliente nossa barraquinha fornece os seguintes produtos:\nBala\nPirulito\nBombom\nPaçoca\nJujuba\nCafé");

while(refazerPedido){

var pedido = prompt("Dos produtos o que você deseja? ");

    if (pedido.toLowerCase() == "cafe" || pedido.toLowerCase() == "pacoca" ){
        console.log("Desculpe, mas sou viciado em "+pedido.toUpperCase() + " e consumi todo o estoque.");
        refazerPedido = false;
    }
    else{
        var temos = prompt("Barraquinha tem o produto para fornecer, responda sim ou não");

        if (temos == "sim"){

            console.log ("Obrigado por comprar " + pedido + " e pela preferência.");
            refazerPedido = false;
        }

        else{
            console.log("Desculpe, não temos o produto hoje para lhe atender.");
            var novoPedido = prompt ("Deseja fazer outro pedido? 'sim'  'nao'")

            if (novoPedido == "sim"){
                refazerPedido = true;
                }
                else{
                    console.log ("Tchau!!");
                    refazerPedido = false;
                }
        }
    }
}