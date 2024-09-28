class Carro {
    constructor( cor, marca, modelo, ano, velocidade ) {
        this.cor = cor
        this.marca = marca
        this.modelo = modelo,
        this.ano =  ano,
        this.velocidade = velocidade
    }

    ligar() {
        console.log("Carro On"); 
    }

    desligar() {
        console.log("Carro off");
    }

    acelerar() {
        this.velocidade += 5
    }
}

let carro1 = new Carro("Ciano", "Mercedes", "GLA", 2024, 0)

carro1.ligar()
carro1.desligar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
console.log(carro1)