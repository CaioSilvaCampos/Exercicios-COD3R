function buscarPalavrasSemelhantes(palavra, array){
    let resultado = []
    array.forEach(element => {
        if(element.includes(palavra)){
            resultado.push(element)
        }
    });
    return resultado
}


let array = ['vasco', 'da gama', 'vas']

console.log(buscarPalavrasSemelhantes('vas', array))