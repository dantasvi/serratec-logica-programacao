/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True 
  */


  var prompt = require('prompt-sync')();
  var idade = prompt ("Qual a sua idade?");

voto = (idade >=16);

console.log("Você já pode votar?", voto);
