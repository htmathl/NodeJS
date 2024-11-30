function traduzirDia(diaEmIngles) {
    let diaEmPortugues;
    switch (diaEmIngles.toLowerCase()) {
        case "monday": diaEmPortugues = "Segunda-feira"; break;
        case "tuesday": diaEmPortugues = "Terça-feira"; break;
        case "wednesday": diaEmPortugues = "Quarta-feira"; break;
        case "thursday": diaEmPortugues = "Quinta-feira"; break;
        case "friday": diaEmPortugues = "Sexta-feira"; break;
        case "saturday": diaEmPortugues = "Sábado"; break;
        case "sunday": diaEmPortugues = "Domingo"; break;
        default: diaEmPortugues = "Dia inválido"; break;
    }
    console.log(diaEmPortugues);
}

traduzirDia("Wednesday"); // Quarta-feira
