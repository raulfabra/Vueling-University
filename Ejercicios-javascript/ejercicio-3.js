//revisar


function primo (numero){
    
    if(numero <= 1) return false;
  
    for (let i=2; i <= Math.sqrt(numero); i++){
      if (numero % i === 0){
        return false;
      }
    }
  
    return true;
      
}


function primerosDiezNumerosPrimos(){

    let arrayDePrimos = [];
    let contador = 2;
    

    while ( arrayDePrimos.length < 10){

        if (primo(contador)){
            arrayDePrimos.push(contador)
            contador++;
        }
            
        contador++;
    }

    return arrayDePrimos
}

console.log(primerosDiezNumerosPrimos())

  