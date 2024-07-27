
function calcular() {
    console.log("va bien")
    calcularPromedioDeLosNumeros()
    calcularElNumeroMayor()

}
function calcularPromedioDeLosNumeros() {
    console.log("calculando el promedio")
    var num1, num2, num3, num4, num5
    var promedio

    promedio = num1 + num2 + num3 + num4 + num5
    promedioTotal = promedio / 5

    var promedioTag
    numero1 = parseFloat(document.getElementById("numero1").value)
    numero2 = parseFloat(document.getElementById("numero2").value)
    numero3 = parseFloat(document.getElementById("numero3").value)
    numero4 = parseFloat(document.getElementById("numero4").value)
    numero5 = parseFloat(document.getElementById("numero5").value)
    promedioTag = document.getElementById("promedioTotal")
    promedioTag.innerText = promedioTotal

}
function calcularElNumeroMayor() {
    console.log("calculando el numero mayor")
}


