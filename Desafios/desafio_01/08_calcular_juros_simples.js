function calcularJurosSimples(principal, taxaJuros, tempo) {
    const juros = (principal * taxaJuros * tempo) / 100;
    console.log(`Juros simples: R$${juros.toFixed(2)}`);
}

calcularJurosSimples(1000, 5, 2); // Juros simples: R$100.00
