const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];


const Luis = personas.find(persona => persona.nombre === "Luis");
console.log(Luis);

personas.forEach(persona => {
    console.log(persona.nombre + " " + "tiene " + " " + persona.edad + " años");
});

const Edades = personas.reduce((suma , persona) => suma + persona.edad, 0);
console.log("Suma las edades: " + Edades);