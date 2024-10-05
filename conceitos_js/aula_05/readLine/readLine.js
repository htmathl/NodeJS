const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual seu nome? ", (nome) => {
    console.log(`Olá, ${nome}!`)
    rl.close()
})