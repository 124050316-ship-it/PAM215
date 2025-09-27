function verificarUsuario(usuario) {
    return new Promise(resolve, reject =>{
        if (usuario === "admin") {
            resolve("Acceso consedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("admin")
.then(resizeBy => console.log(res))
.catch(err => console.error(err));

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));
