/*Filhinho de Eduardo e Monica ficou de recuperação ? Digitar 4 notas, ou seja, precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação.
*/

const prompt = require("prompt-sync")();

//Entradas
 var A = prompt("Digitar nota 1");
 var B = prompt("Digitar nota 2");
 var C = prompt("Digitar nota 3");
 var D = prompt("Digitar nota 4");

 var n1 = parseInt(A);
 var n2 = parseInt(B);
 var n3 = parseInt(C);
 var n4 = parseInt(D);


//Processamento

var soma = n1 + n2 + n3 + n4;
var media = soma / 4;    

varAprovada = media >=7;

var texto = "Você está em recuperação!"

if (varAprovada)                                                      
 texto = ("Aprovada. Parabéns. Já pode arrumar suas malas");

 console.log(texto);
 

