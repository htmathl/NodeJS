function validarLogin(username, senha) {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";
    const loginPermitido = username === usuarioCorreto && senha === senhaCorreta;
    console.log(`Login permitido: ${loginPermitido}`);
}

validarLogin("admin", "1234"); // Login permitido: true
