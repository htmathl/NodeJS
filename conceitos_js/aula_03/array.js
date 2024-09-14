const frutas = ['Banana','Maçã','Laranja']
console.log(frutas[1]);

frutas[1] = 'uva'
console.log(frutas[1]);

//remover último elemento
frutas.pop()
console.log(frutas);

//adiciona um elemnto na última posição
frutas.push('Abacate');
console.log(frutas);

//substitui um elemento na lista
frutas.splice(1,1, 'Abacaxi', 'Mango')
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
}