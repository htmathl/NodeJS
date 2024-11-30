function converterComprimento(metros) {
    const centimetros = metros * 100;
    const milimetros = metros * 1000;
    console.log(`${metros} metros equivalem a ${centimetros} cm e ${milimetros} mm.`);
}

converterComprimento(2); // 2 metros equivalem a 200 cm e 2000 mm.
