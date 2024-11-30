class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}! Tenho ${this.idade} anos.`);
    }
}

const pessoa = new Pessoa("Matheus", 21);
pessoa.cumprimentar();
