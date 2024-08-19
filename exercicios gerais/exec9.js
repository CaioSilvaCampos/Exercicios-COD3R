function repetir(valor, qtdRepeticao){
    let resultado = []
    for(i=0; i<qtdRepeticao;i++){
        resultado.push(valor)
    }
    return resultado
}

console.log(repetir(7,3))