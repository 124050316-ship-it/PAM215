function simularPeticionAPI() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Datos rescibidos corectamente");
        }, 5000);
    });
}

async function obtenerDatos(){
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

obtenerDatos();