function calcularMedia(array){
    let soma = 0
    array.forEach(element => {
       soma += element
    });
    return soma/array.length
}


let array = [10,20,30]
console.log(calcularMedia(array))