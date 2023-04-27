// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function calcularAreaTriangulo(base,alto){
    let resultado
    if (base < 0 || alto < 0){
        resultado = -1
    } else {
        resultado = (alto * base)/2
    }
    return resultado
}

console.log(calcularAreaTriangulo(-1,11))