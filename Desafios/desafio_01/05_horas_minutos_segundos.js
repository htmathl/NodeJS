function converterHoras(horas) {
    const minutos = horas * 60;
    const segundos = horas * 3600;
    console.log(`${horas} horas equivalem a ${minutos} minutos e ${segundos} segundos.`);
}

converterHoras(2); // 2 horas equivalem a 120 minutos e 7200 segundos.
