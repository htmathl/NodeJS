function validarCodigoPromocional(codigo, valorCompra) {
    if (codigo === "DESC10" && valorCompra > 50) {
        console.log(valorCompra * 0.9);
    } else if (codigo === "PROMO20" && valorCompra > 50) {
        console.log(valorCompra * 0.8);
    } else {
        console.log("Código inválido ou compra insuficiente");
    }
}

validarCodigoPromocional("DESC10", 60); // 54
validarCodigoPromocional("PROMO20", 40); // Código inválido ou compra insuficiente
