/*Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.*/



var prompt = require("prompt-sync")();

var Num1 = prompt("Digite um número");
var Num2 = Num1 * 2;

console.log(" O dobro de " + Num1 + " foi" + Num2);


