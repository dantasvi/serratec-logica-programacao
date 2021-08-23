/*Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False*/

  const prompt = require('prompt-sync')();

  var p1 = prompt("Numero Player 1: ");
  var p2 = prompt("Numero Player 2: ");
  
  var vitoria1 = p1 > p2;
  var vitoria2 = p2 > p1
  var empate = p1 == p2;
  
  console.log(":  Resultados  :")
  console.log("Player 1 venceu?", vitoria1);
  console.log("Player 2 venceu?", vitoria2);
  console.log("Houve empate?", empate);
  