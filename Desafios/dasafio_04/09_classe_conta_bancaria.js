class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor}. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

const conta = new ContaBancaria("Carlos", 1000);
conta.depositar(500);
conta.sacar(300);
conta.sacar(1500);
