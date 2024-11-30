class Turma {
    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        console.log(`Alunos da turma ${this.nome}:`);
        this.alunos.forEach(aluno => console.log(aluno));
    }
}

const turma = new Turma("Turma A");
turma.adicionarAluno("João");
turma.adicionarAluno("Maria");
turma.listarAlunos();

console.log("-----");

const turmaB = new Turma("Turma B");
turmaB.adicionarAluno("Carlos");
turmaB.adicionarAluno("Ana");
turmaB.listarAlunos();