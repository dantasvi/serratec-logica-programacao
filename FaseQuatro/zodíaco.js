/*O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!*/


var prompt = require('prompt-sync')()

var dia = prompt("Dia do nascimento:");
var mes = prompt("Mês do nascimento");

var inteligente = dia <= 19 && mes == 2 || dia >= 21 && mes == 1;

console.log("Mês do nascimento:" + mes);
console.log("Dia do nascimento: " + dia);
console.log("Você é inteligente? "+ inteligente);


