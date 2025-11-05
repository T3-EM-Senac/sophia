for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let saldo = 100;
while (saldo > 0) {
    console.log("Saldo: " + saldo);
    saldo -= 10;
}

let n = 1;
while (n <= 20) {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
}

let senha = "0000"; 
let tentativas = 0;

do {
    tentativas++;
    console.log("Tentativa " + tentativas + ": " + senha);
    if (tentativas === 3) {
        senha = "1234";
    }
} while (senha !== "1234");

console.log("Acesso liberado depois de " + tentativas + " tentativas!");