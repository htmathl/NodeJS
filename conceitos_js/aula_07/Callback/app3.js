var contador = 1

const mensagem = setInterval(() => {
    console.log(contador + " vezes");

    if( contador == 3 ) {
        clearInterval(mensagem)
    }

    contador ++
}, 500)

const timeOutId = setTimeout(() => {
    console.log("Nothing");
}, 5000)

//cancelando timeout
clearTimeout(timeOutId)

console.log("O time foi cancelado!");