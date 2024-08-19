function estaEntre(numero, minimo, maximo, inclusivo = false){
   if(inclusivo == false){
        if(numero > minimo && numero < maximo){
            return true
        } 
        else{
            return false
        }
   } else{
        if(numero >= minimo && numero <= maximo){
            return true
        } else{
            return false
        }
   }
}

console.log(estaEntre(20,20,100))