function encontrarMaiorComWhile(numeros) {
    let maior = numeros[0];
    let i = 1;
    while (i < numeros.length) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        i++;
    }
    return maior;
}

console.log(encontrarMaiorComWhile([1, 3, 7, 2, 5])); // 7
