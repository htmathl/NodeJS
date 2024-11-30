function encontrarMaior(numeros) {
    return Math.max(...numeros);
}

const maiorNumero = encontrarMaior([1, 3, 7, 0, 5]);
console.log("Maior número:", maiorNumero);
