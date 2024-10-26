const minhaPromessa = new Promise(( res, rej ) => {
    idade = 18

    if ( idade >= 18) {
        res("Acesso permitido!")
    } else {
        rej("Acesso negado!")
    }
})

minhaPromessa.then( dados => console.log(dados) ).catch( error => console.log(error) )
