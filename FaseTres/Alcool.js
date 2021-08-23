//O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.


var prompt = require("prompt-sync")();

var capacidade = prompt("Quantos ml cabem na garrafa? ");

var A = capacidade * 0.7;
var B = capacidade * 0.3;

console.log("alcool: " + A + "gel: " + B);


