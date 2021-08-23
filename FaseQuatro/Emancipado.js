/*É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True
*/

const prompt = require('prompt-sync')();

var sexo = prompt("Qual o sexo da pessoa a ser consultada: ");
var bday = prompt("Qual o ano de nascimento: ");
var sf = sexo == "Feminino" && bday <= 2000;
var sm = sexo == "Masculino" && bday <= 2003;

console.log("Sexo: ", sexo, "\nAno de nascimento: ", bday);

if(sexo == "Feminino")
    console.log("Cidadão Emancipado? ", sf);

if(sexo == "Masculino")
    console.log("Cidadão Emancipado? ", sm);