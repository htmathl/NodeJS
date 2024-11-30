function converterMoeda(valorBRL, taxaCambio) {
    const valorUSD = valorBRL / taxaCambio;
    console.log(`R$${valorBRL.toFixed(2)} equivalem a $${valorUSD.toFixed(2)} USD.`);
}

converterMoeda(100, 5); // R$100.00 equivalem a $20.00 USD.
