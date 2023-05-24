
function primo (numero){
    
  if(numero <= 1) return false;

  for (let i=2; i <= Math.sqrt(numero); i++){
    if (numero % i === 0){
      return false;
    }
  }

  return true;
    
  }

  let contador = 30;
  let i = 0;
  while ( i <= contador ){
    console.log(primo(i), i);
    i++;
  }
  
