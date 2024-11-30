function calcularMediaLista(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    return soma / lista.length;
}

console.log(calcularMediaLista([10, 20, 30, 40, 50])); // 30
