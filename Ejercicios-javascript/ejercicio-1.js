
function calcularEdad(edad){
  
    if (edad < 18) return false;
  
    if (edad >= 18) return true;
}


console.log("Tengo 18 años, soy mayor de edad? : ", calcularEdad(18));

console.log("Tengo 5 años, soy mayor de edad? : ", calcularEdad(5));