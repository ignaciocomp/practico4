// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function calcularAreaRectangulo(ancho,alto){
let resultado 
    if (ancho < 0 || alto < 0){
        resultado = -1
    } else {
        resultado = (alto * ancho)
    }
    return resultado
}

console.log(calcularAreaRectangulo(2,11))