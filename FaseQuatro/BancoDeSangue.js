/*Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False*/

var prompt = require('prompt-sync')();

console.log("Digite Sim ou Nao");

var idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = prompt("Pesa menos de 50kg: ");
var hepatite = prompt("Portador de Hepatite: ");
var malaria = prompt("Já teve Malária: ");
var doacao = prompt("Fez doação recente: ");

var validade = idade == "Nao" && peso == "Nao" && hepatite == "Nao" && malaria == "Nao" && doacao == "Nao";

console.log("[Resultado da triagem]");
console.log("Pode doar sangue?", validade);