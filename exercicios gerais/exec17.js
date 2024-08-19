function somarNumeros(array){
    let resultado = 0
    array.forEach(element => {
        resultado += element
    });
    return resultado
}

let array = [10,20,30]
console.log(somarNumeros(array))