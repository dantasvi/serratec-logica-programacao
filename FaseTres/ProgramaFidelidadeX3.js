/*O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
Digite seus cupons: 12
Seus cupons agora valem 36 pontos!
*/

var prompt = require("prompt-sync")();

var qtd = prompt("Digite a qtde de cupons");
var Plus = qtd * 3;


console.log("De acordo com seus cupons, você tem " + Plus + " pontos no programa de fidelidade !");

