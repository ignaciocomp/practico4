// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function calcular(farenheit){
    let resultado
    resultado = ((farenheit - 32)/1.8)
    return resultado
}

console.log(calcular(3,11))