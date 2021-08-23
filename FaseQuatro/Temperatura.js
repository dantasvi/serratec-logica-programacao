/*Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False*/

const prompt = require('prompt-sync')();

var temperatura = prompt("Digite a temperatura: ");
var mascara = prompt("Usa mascara? (s/n) ");

var entrada = temperatura <= 37.5 && mascara == "s";

console.log("Autorizar a entrada ", entrada);

