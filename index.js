const vitorias = 90;
const derrotas = 5;

function saldoRankeada(vitorias, derrotas) {
    return vitorias - derrotas;
}

const saldo = saldoRankeada(vitorias, derrotas);

if (saldo < 10) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Ferro");
} else if (saldo < 20) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Bronze");
} else if (saldo < 50) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Prata");
} else if (saldo < 80) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Ouro");
 }else if (saldo < 90) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Diamante");
}else if (saldo < 101) {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Lendário");
}else {
    console.log("o herói tem de saldo de " + saldo + ", e está no nivel de Imortal");
}