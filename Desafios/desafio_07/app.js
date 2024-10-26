function obterTemperatura(temperatura) {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log("A teperatura de SP é " + temperatura + " K");
            resolve()
        }, 3000)
    })
}

async function verificarClima() {
    console.log("Verificando a temperatura...");
    await obterTemperatura(304.15)
}

verificarClima()