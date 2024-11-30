function verificarHorario(dia, hora) {
    const diasUteis = ["segunda", "terça", "quarta", "quinta", "sexta"];
    const aberto = (diasUteis.includes(dia) && hora >= 9 && hora < 18) ||
                   (dia === "sábado" && hora >= 9 && hora < 14);
    console.log(`A loja está ${aberto ? "aberta" : "fechada"} no ${dia} às ${hora}h`);
}

verificarHorario("sexta", 16);
verificarHorario("sábado", 15);
