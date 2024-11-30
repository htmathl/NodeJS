function converterVelocidade(velocidadeKmH) {
    const velocidadeMS = velocidadeKmH / 3.6;
    console.log(`${velocidadeKmH} km/h equivalem a ${velocidadeMS.toFixed(2)} m/s.`);
}

converterVelocidade(90); // 90 km/h equivalem a 25.00 m/s.
