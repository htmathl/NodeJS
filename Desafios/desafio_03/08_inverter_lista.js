function inverterLista(lista) {
    let listaInvertida = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        listaInvertida.push(lista[i]);
    }
    return listaInvertida;
}

console.log(inverterLista([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
