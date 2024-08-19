function receberPrimeiroEUltimoElemento(array){
    let primeiroElem = [array.shift()]
    let ultimoElem = [array.pop()]
    let newArray = primeiroElem.concat(ultimoElem)
    return newArray
}


let array = [10,20,30]

console.log(receberPrimeiroEUltimoElemento(array))