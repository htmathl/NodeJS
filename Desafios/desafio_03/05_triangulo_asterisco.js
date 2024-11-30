function desenharTriangulo(n) {
    let linha = "";
    for (let i = 1; i <= n; i++) {
        linha += "*";
        console.log(linha);
    }
}

desenharTriangulo(5);
