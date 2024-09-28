verificarVantagem(6, 4.2)

function verificarVantagem(precoGasolina, precoAlcool) {
    console.log(`\n\n Preço do álcool: ${precoAlcool} \n Preço da Gasolina ${precoGasolina} \n\n`)

    vantagem =  precoAlcool <= (Math.round(precoGasolina * 0.7 * 100) / 100);

    if( vantagem ) {
        console.log("É mais vantajoso abastecer com álcool")
        return
    }

    console.log("É mais vantajoso abastecer com gasolina")
}