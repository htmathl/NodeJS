const moment = require('moment')

// 1. 
const agora = moment().format('DD/MM/YYYY HH:mm:ss')
console.log('Data e hora atual:', agora)

// Pergunta
console.log( 'Data e hora atual:', moment().format('MM/DD/YYYY') )

// adicione 7 dias
const seteDiasDepois = moment().add(7, 'days').format('DD/MM/YYYY')
console.log("7 dias depois:", seteDiasDepois)

//subtraia 5 dias e exbiba o resultado
const cincoDiasAntes = moment().subtract(5, 'days').format('DD/MM/YYYY')
console.log("5 dias antes:", cincoDiasAntes)

// Pergunta 2
console.log("8 Meses depois", moment().add(8, 'months').format('DD/MM/YYYY'))
console.log("50 Anos depois", moment().add(50, 'years').format('DD/MM/YYYY'))

// Diferença entre datas
const dataInicial = moment('2023-01-01', 'YYYY-MM-DD')
const dataFinal = moment('2023-12-31', 'YYYY-MM-DD')
const diferenca = dataFinal.diff( dataInicial, 'days' )
console.log("Diferença em dias:", diferenca)


// Pergunta 3
const dataInicialAno = moment('2023-01-01', 'YYYY-MM-DD')
const dataFinalAno = moment('2029-12-31', 'YYYY-MM-DD')
const diferencaAno = dataFinalAno.diff( dataInicialAno, 'years' )
console.log("Diferença em anos:", diferencaAno)

const dataInicialMes = moment('2023-01-01', 'YYYY-MM-DD')
const dataFinalMes = moment('2024-12-31', 'YYYY-MM-DD')
const diferencaMes = dataFinalMes.diff( dataInicialMes, 'months' )
console.log("Diferença em Meses:", diferencaMes)