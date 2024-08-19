function exibirSomenteOsPares(array) {
    return array.filter(item => item % 2 == 0)
}


let array = [10,5,2,20]

console.log(exibirSomenteOsPares(array))