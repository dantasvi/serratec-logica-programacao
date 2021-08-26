/* Delivery de comida Japonesa "XingLing" iniciando suas atividades precisa contratar motoboy e, como tem uma certa urgência na contratação, não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga. O objetivo é fazer uma pré-seleção e permitir que somente os candidatos que cumpram tais requisitos enviem seu currículo para o RH 
Perguntas
Possui CNH categoria A ?  Sim Não
CNH está na validade ? Sim Não
Possui experiência na área ? Sim Não
Se essas respostas acima forem verdadeiras, então o candidato está apto a enviar se currículo para análise
*/

const prompt = require("prompt-sync")();

//Entradas
 var A = prompt("Possui CNH A? Digite s ou n");
 var B = prompt("CNH está na validade? Digite s ou n");
 var C = prompt("Possui experiência na área? Digite s ou n");


//Processamento

var CNH = A == "s" || A == "S" || A == "Sim";
var validade = B == "s" || B == "S" || B == "Sim";
var experiencia = C == "s" || C == "S" || C == "Sim";

var resposta = CNH && validade && experiencia;

//Saída

var mensagem = "";

if (resposta)
 mensagem = "Você atende aos requisitos da vaga. Envie seu curriculo para rh@xingling.com.br"

else 
 mensagem = "Infelizmente você não atende aos requisitos dessa vaga"

console.log(mensagem);


