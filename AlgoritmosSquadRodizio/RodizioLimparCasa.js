/*
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.*/

const prompt = require("prompt-sync")();

console.log("Check Lista da Faxina")

var c1 = prompt("Você limpou a sala essa semana? Digite S ou N");
if(c1 == "N")
console.log("A sala está suja. É necessário limpá-la");
else
console.log("Não é necessário limpar a sala");

var c2 = prompt("Você limpou a cozinha essa semana? Digite S ou N");
if(c2 == "N")
console.log("A cozinha está suja. É necessário limpá-la");
else
console.log("Não é necessário limpar a cozinha");

var c3 = prompt("Você limpou o banheiro essa semana? Digite S ou N");
if(c3 == "N")
console.log("O banheiro está sujo. É necessário limpá-lo");
else
console.log("Não é necessário limpar o banheiro");

var c4 = prompt("Você limpou o quartO essa semana? Digite S ou N");
if(c4 == "N")
console.log("O quarto está sujo. É necessário limpá-lo");
else
console.log("Não é necessário limpar o quarto");






