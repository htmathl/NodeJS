function converterNota(nota) {
    if (nota >= 90) {
        console.log(`Nota ${nota} em letra: A`);
    } else if (nota >= 80) {
        console.log(`Nota ${nota} em letra: B`);
    } else if (nota >= 70) {
        console.log(`Nota ${nota} em letra: C`);
    } else if (nota >= 60) {
        console.log(`Nota ${nota} em letra: D`);
    } else {
        console.log(`Nota ${nota} em letra: F`);
    }
}

converterNota(88); // Nota em letra: B
converterNota(45); // Nota em letra: F