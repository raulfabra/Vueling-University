
calcularElPromedioDeEdadesMayoresDe18([2, 15, 45, 89, 42, 15, 26, 35, 29, 75, 2, 1, 6, 3, 16])

function calcularElPromedioDeEdadesMayoresDe18 (edades){

    let sumaEdades = 0
    let sumaDeMayoresDe18 = 0;

    for (let i = 0; i < edades.length; i++){
        if (edades[i] >= 18){
            sumaEdades += edades[i];
            sumaDeMayoresDe18++;
        }
    }

    if (sumaDeMayoresDe18 === 0) return 0;

    const promedio = sumaEdades / sumaDeMayoresDe18;

    console.log(Math.floor(promedio))
}