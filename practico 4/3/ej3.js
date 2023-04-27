// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function esBisiesto(ano){
    let resultado
    if (ano % 4 === 0 && !(ano % 100 === 0) || ano % 400 === 0){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}

console.log(esBisiesto(1600))