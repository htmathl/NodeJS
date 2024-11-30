function contarFrequencia(lista, elemento) {
    let contador = 0;
    for (let item of lista) {
        if (item === elemento) {
            contador++;
        }
    }
    return contador;
}

console.log(contarFrequencia([1, 2, 3, 2, 4, 2], 2)); // 3
