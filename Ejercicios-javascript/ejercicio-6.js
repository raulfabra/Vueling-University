duplicado()
duplicarNumero()
//CREO QUE NO ES ESTO LO QUE PEDIA, REPETIR DESPUES CON NUMEROS.
function duplicado(){

    let array = ["rojo", "negro", "amarillo", "verde"]
    let newArray = [];

    array.forEach(item => {
        newArray.push(item);
        newArray.push(item);
    })

    console.log( array = [...newArray]);
    return array = [...newArray];

}


function duplicarNumero(){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let nuevoArray = [...array];

    for (let i = 0; i < nuevoArray.length; i++){
        nuevoArray[i] *= 2;
    }

    console.log(array);
    console.log(nuevoArray);
}