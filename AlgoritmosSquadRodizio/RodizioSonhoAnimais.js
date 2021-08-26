/*
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?

## Dicas:
• Crie uma função para gerar os números aleatórios.
• Diga sempre qual é o animal sorteado
• Diga se ele acertou ou não
• Dê uma nova chance até ele acertar
*/

const prompt = require('prompt-sync')();

do{
var question = prompt("Qual animal você sonhou? ")
var question2 = question.toUpperCase()

var n1 = Math.random()*5
var n2 = Math.trunc(n1 + 1)
console.log(n2)

if (n2 == 1)
n2 = "CACHORRO"
if (n2 == 2)
n2 = "GATO"
if (n2 == 3)
n2 = "PEIXE"
if (n2 == 4)
n2 = "ARANHA"
if (n2 == 5)
n2 = "PASSARO"

if(question2 == "CACHORRO" && n2 == "CACHORRO"){
    console.log("Parabéns você ganhou, ambos escolheram ", n2, "!")
}
if(question2 == "GATO" && n2 == "GATO"){
    console.log("Parabéns você ganhou, ambos escolheram ", n2, "!")
}
if(question2 == "PEIXE" && n2 == "PEIXE"){
    console.log("Parabéns você ganhou, ambos escolheram ", n2, "!")
}
if(question2 == "ARANHA" && n2 == "ARANHA"){
   console.log("Parabéns você ganhou, ambos escolheram ", n2, "!")
}
if(question2 == "PASSARO" && n2 == "PASSARO"){
   console.log("Parabéns você ganhou, ambos escolheram ", n2, "!")
}
if(question2 != n2){
    console.log("Infelizmente você perdeu! A máquina escolheu", n2, ". Boa sorte na próxima!")
}
} while(question2 != n2)