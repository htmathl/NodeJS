function verificarLetra(letra) {
    const vogais = ["a", "e", "i", "o", "u"];
    if (vogais.includes(letra.toLowerCase())) {
        console.log(`A letra ${letra} é uma vogal`);
    } else {
        console.log(`A letra ${letra} é uma consoante`);
    }
}

verificarLetra("e"); // A letra e é uma vogal
verificarLetra("b"); // A letra b é uma consoante
