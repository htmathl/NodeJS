const calcularIdade = (nascimento, dataAtual) => dataAtual - nascimento

console.log( calcularIdade( 2000, new Date().getFullYear() ) )