const moment = require('moment')

const data = moment().format('DD/MM/YYYY HH:mm:ss')
console.log(data)

//Pergunta: Qual seria o formato de saída se você quiser mostrar a data no estilo MM-DD-YYYY? Altere o código para exibir nesse formato
const data2 = moment().format('MM-DD-YYYY')
console.log(data2)

//Adicione 7 dias à data atual e exiba no console
const data3 = moment().add(7, 'days').format('DD/MM/YYYY')
console.log(data3)


//Subtraia 5 dias e exiba no console
const data4 = moment().subtract(5, 'days').format('DD/MM/YYYY')
console.log(data4)

//Pergunta: Como você poderia adicionar meses ou anos à data atual? Teste isso em seu código.
const data5 = moment().add(2, 'years').format('DD/MM/YYYY')
console.log(data5)

const data6 = moment().add(3, 'months').format('DD/MM/YYYY')
console.log(data6)

//Calculando Diferença entre Datas
const dataInicial = moment('2023-01-01', 'YYYY-MM-DD')
const dataFinal = moment('2023-12-31', 'YYYY-MM-DD')
const diferenca = dataFinal.diff(dataInicial, 'days')
console.log("Difereça em dias:", diferenca)

//Pergunta: Qual seria o resultado se você quisesse calcular a diferença em meses ou anos? Modifique o código para testar.
const diferenca2 = dataFinal.diff(dataInicial, 'months')
console.log("Difereça em meses:", diferenca2)

const dataInicial2 = moment('2023-01-01', 'YYYY-MM-DD')
const dataFinal2 = moment('2027-12-31', 'YYYY-MM-DD')
const diferenca3 = dataFinal2.diff(dataInicial2, 'years')
console.log("Difereça em anos:", diferenca3)