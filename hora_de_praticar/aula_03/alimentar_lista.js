const numeros = [], pares = [], inpares = []

for(let i = 1; i <= 100; i++) {
    numeros.push(i)
}

console.log(numeros)

for(let i = 1; i <= 100; i++) {
    if(numeros[i] % 2 == 0) {
        pares.push(i)
    } else {
        inpares.push(i)
    }
}

console.log(pares)
console.log(inpares)
