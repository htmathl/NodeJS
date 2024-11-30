function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        console.log("Categoria: Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Categoria: Adolescente");
    } else if (idade >= 18 && idade <= 64) {
        console.log("Categoria: Adulto");
    } else if (idade >= 65) {
        console.log("Categoria: Idoso");
    } else {
        console.log("Idade inválida");
    }
}

classificarIdade(25); // Categoria: Adulto
classificarIdade(10); // Categoria: Criança
