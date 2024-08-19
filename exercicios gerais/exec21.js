function menorNumero(array){
    let menorNumero = array[0]
    array.forEach(element => {
        if(element <= menorNumero){
            menorNumero = element
        }
    });
    return menorNumero
}


let array = [10,5,3]
console.log(menorNumero(array))