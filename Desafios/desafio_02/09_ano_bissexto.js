function ehAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log(`O ano ${ano} é bissexto.`);
    } else {
        console.log(`O ano ${ano} não é bissexto.`);
    }
}

ehAnoBissexto(2024); // O ano 2024 é bissexto.
ehAnoBissexto(2021); // O ano 2021 não é bissexto.
