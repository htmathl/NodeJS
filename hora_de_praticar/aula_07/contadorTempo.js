let contador = 10

const contar = setInterval(() => {
    if( contador == 0 ) {
        clearInterval(contar)
    }

    console.log(contador);
    
    contador --
}, 1000)