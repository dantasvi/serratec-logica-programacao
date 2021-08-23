//Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra


var jogos = 345;
var game = 1545;
var total = jogos + game;

console.log(total);


var A = (total / 3);
var B = (total / 5);
var C = ((total * 1.015) /10);

console.log("Parcelamento 3x: "+ A + " Parcelamento 5x: "+ B + "Parcelamento 10x" + C);

