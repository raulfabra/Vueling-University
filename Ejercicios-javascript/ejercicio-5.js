const texto = "Me estoy volviendo loco con JavaScript"

const palabraMasLarga = (texto) => {
    
    const separarPorEspacios = texto.split(" ");
    
    let palabraMasLarga = separarPorEspacios[0];
    
    for (const palabra of separarPorEspacios) {
        if (palabra.length >= palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
};


palabraMasLarga(texto);

console.log("La palabra más larga es: ");
console.log(palabraMasLarga(texto));