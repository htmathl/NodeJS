function converterParaSegundos(horas, minutos) {
    return (horas * 3600) + (minutos * 60);
}

const segundos = converterParaSegundos(2, 30);
console.log("Tempo em segundos:", segundos);
