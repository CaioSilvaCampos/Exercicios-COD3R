function multiplicar(fator1, fator2){
    let resultado = 0
    if(fator1 <= fator2){
        for(i=0; i<fator1; i++){
            resultado += fator2
        }
    }
    else if(fator2 < fator1){
        for(i=0; i<fator2; i++){
            resultado += fator1
        }
    }
    else{
        return 'Insira somente numeros'
    }
    return resultado
}
console.log(multiplicar(10,2))