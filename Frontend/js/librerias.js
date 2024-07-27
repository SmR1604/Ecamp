function suma(a, b) {
    var resultado = a + b
    resultado = a + b
    return resultado

}
function accionSumar() {
    var obtenernumero1
    var obtenernumero2
    var resultadoSuma
    obtenernumero1 = parseFloat(document.getElementById("numero1").value)
    obtenernumero2 = parseFloat(document.getElementById("numero2").value)
    resultadoSuma = suma(obtenernumero1, obtenernumero2)
    console.log(document.getElementById("resultadoSuma").innerText)
    document.getElementById("resultadoSuma").innerText = resultadoSuma
    limpiar()
}
function limpiar() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""

}
function resultado1() {
    document.getElementById("resultadoSuma").value = ""

}
function openNewTab() {
    var data = document.getElementById('inputData').value
    var newWindow = window.open();
    newWindow.document.write();
}


