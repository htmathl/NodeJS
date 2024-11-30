function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

const media = calcularMedia([10, 20, 30, 40, 50]);
console.log("Média dos números:", media);
