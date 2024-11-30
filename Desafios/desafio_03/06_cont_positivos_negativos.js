function contarPositivosNegativos(numeros) {
    let positivos = 0;
    let negativos = 0;
    for (let numero of numeros) {
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
    }
    return { positivos, negativos };
}

console.log(contarPositivosNegativos([1, -2, 3, -4, 5])); // { positivos: 3, negativos: 2 }
