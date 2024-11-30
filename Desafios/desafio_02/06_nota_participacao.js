function calcularNota(totalAulas, aulasParticipadas) {
    const percentual = (aulasParticipadas / totalAulas) * 100;
    let nota;
    if (percentual === 100) {
        nota = 10;
    } else if (percentual >= 75) {
        nota = 8;
    } else if (percentual >= 50) {
        nota = 6;
    } else {
        nota = 0;
    }
    console.log(nota);
}

calcularNota(20, 15); // 8
