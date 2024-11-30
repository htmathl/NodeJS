class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

const aluno = new Aluno("João", [8, 7, 9, 6]);
console.log(`Média do aluno ${aluno.nome}:`, aluno.calcularMedia());
