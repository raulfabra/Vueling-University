
function ordenar (){
    
    let array = [-3, -8, 10, 7, 4, -1, 5, 6, 3]

    array.sort((a, b) => b - a)

    return array[0]

    
}

console.log(ordenar());


