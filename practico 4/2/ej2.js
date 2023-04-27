// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function esMayor(edad, tope){
    let resultado
    if (edad > tope){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}

console.log(esMayor(8,1))