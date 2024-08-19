function filtrarNumeros(array){
    let numeros = []
    array.forEach(element => {
        if(typeof(element) == 'number'){
            numeros.push(element)
        }
    });
    return numeros
}


function filtrarNumeros2(array) {
    return array.filter(item => typeof item === "number")
    }
let array = [10,20,'oi','aaaa']

console.log(filtrarNumeros(array))