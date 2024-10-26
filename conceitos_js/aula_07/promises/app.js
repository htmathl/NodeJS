const minhaPromessa = new Promise(( res, rej ) => {
    nome = 'Rodrigo'

    if ( nome == 'Rodrigo' ) {
        res("Usuário rodrigo encontrado!")
    } else {
        rej("Nop nop nada encontrado!")
    }
})

minhaPromessa.then( dados => console.log(dados) ).catch( error => console.log(error) )
