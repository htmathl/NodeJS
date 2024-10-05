const duplciarLista = ( lista ) => {
    let newLista = []
    lista.forEach(numero => {
        newLista.push(numero * 2)
    });

    return newLista
}

console.log( duplciarLista([ 1, 2, 3, 4 ]) )
console.log( duplciarLista([ 10, 5, 830 ]) )