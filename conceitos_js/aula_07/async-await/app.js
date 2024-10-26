function primeiraFuncao() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log("Espera 1s")
            resolve()
        }, 1000)
    } )
}

async function segundaFuncao() {
    console.log("Iniciou segunda função");
    await primeiraFuncao()
    console.log("Terminou segunda função");
}

segundaFuncao()