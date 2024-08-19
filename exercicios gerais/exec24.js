function contarCarctere(caractere, frase){
    let contador = 0
    for(i=0; i<frase.length;i++){
        if(frase.charAt([i]) == caractere){
            contador++
        }
    }
    return contador
}


console.log(contarCarctere('c', 'vasco da gama caralhoooo'))