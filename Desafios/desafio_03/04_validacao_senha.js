const readline = require('readline');

function validarSenha(senhaCorreta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askForPassword() {
        rl.question('Digite a senha: ', (senha) => {
            if (senha === senhaCorreta) {
                console.log('Senha válida!');
                rl.close();
            } else {
                console.log('Senha incorreta, tente novamente.');
                askForPassword();
            }
        });
    }

    askForPassword();
}

validarSenha('1234');