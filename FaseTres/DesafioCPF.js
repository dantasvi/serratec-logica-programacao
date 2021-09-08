
/* Desafios
A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
Dia (hoje): 16
CPF (após o hífen): 41
Autorizado a entrar na loja? False
*/

const prompt = require("prompt-sync")();

var dia = prompt("Que dia do mês é hoje? ");
var cpf = prompt("Quais são os 2 últimos números do seu CPF? ");

var diaPar = dia % 2 == 0;
var cpfPar = cpf % 2 == 0;


var autorizado = diaPar == cpfPar;

console.log("Está autorizado a entrar na loja? ", autorizado);









