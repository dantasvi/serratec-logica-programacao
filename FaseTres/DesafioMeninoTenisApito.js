//O menino, os tênis e os apitos
//Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) possui um valor diferente. Seu desafio é descobrir qual é o resultado da última equação. Preste muita atenção, pois os detalhes fazem a diferença!

/*Dicas:
Crie suas variáveis utilizando os nomes de cada símbolo na imagem (Ex. menino).
Use comentários para transcrever a equação de cada linha em formato de texto. Pode também escrever no console.
Escreva o algoritmo em formato de solução, resolvendo a equação como se o fizesse no papel (Tia Terezinha diria: Resolve para x...)
As equações da imagem são expressões matemáticas simples, portanto, em algumas delas você precisará redefinir a precedência das operações.
Faça primeiro o desafio de cabeça ou no papel, depois compare com o resultado do seu algoritmo: Será que você acertou?
Aproveite para conferir o seu resultado com os colegas do seu squad.*/


var sapato = 30 / 6;
console.log("Sapato = " + sapato);

var menino = (20 - 2 * sapato ) / 2;
console.log("Menino = " + menino);

var apito = (13 -menino ) / 4;
console.log("Apito = " + apito);

var resp = sapato + menino + apito;

console.log("O resultado da expressão é " + resp);




