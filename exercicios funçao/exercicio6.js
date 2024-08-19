/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function jurosSimples(capital, juros, tempo) {
    return  capital + ( capital * juros * tempo)
}



function jurosCompostos(capital,juros,tempo) {
    return capital * (1+juros) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));