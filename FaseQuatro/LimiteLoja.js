//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.


const prompt = require('prompt-sync')();

const limite = 8;

var qtde = prompt("Quantas pessoas estão na loja? ");

    var permitir = (qtde < limite) && (qtde != 7);
    var momento = (qtde == limite);
    var expulsar = (qtde > limite);
    var quase = (qtde == 7)

if (permitir)
console.log("Entrada Permita.");
if (momento)
console.log("Negar entrada para não exceder o limite.");
if (expulsar)
console.log("Entrada Proibida. Aguarde por favor.");
if (quase)
console.log("Entrada permita, desde que não esteja acompanhado.");