function somaPares(n) {
    let soma = 0;
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }
    return soma;
}

console.log(somaPares(10)); // 30
