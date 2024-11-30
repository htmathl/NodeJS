function converterTempo(dias) {
    const horas = dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    console.log(`${dias} dias equivalem a ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);
}

converterTempo(2); // 2 dias equivalem a 48 horas, 2880 minutos e 172800 segundos.
