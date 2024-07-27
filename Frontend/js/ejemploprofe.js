// //function calcularElNumeroMayorYElPromedio() {
//     calcularPromedioDeLosNumeros()
//     calcularElNumeroMayor()
// }

// function calcularPromedioDeLosNumeros() {
//     console.log("calculando el promedio de los números")
//     var numero1
//     var numero2
//     var numero3
//     var numero4
//     var numero5

//     var promedio
//     var suma

//     numero1 = parseFloat(document.getElementById("num1").value)
//     numero2 = parseFloat(document.getElementById("num2").value)
//     numero3 = parseFloat(document.getElementById("num3").value)
//     numero4 = parseFloat(document.getElementById("num4").value)
//     numero5 = parseFloat(document.getElementById("num5").value)

//     suma = numero1 + numero2 + numero3 + numero4 + numero5
//     promedio = suma / 5

//     var promedioNode
//     promedioNode = document.getElementById("promedio")
//     promedioNode.innerText = promedio

// }

// function calcularElNumeroMayor() {
// console.log("calculando el número mayor")
// }

// function ejercicios() {
//     console.log("inicio del programa")
//     var factorial = 50
//     var resultadoFactorial = 1
//     for (variable = 1; variable <= factorial; variable = variable + 1) {
//         console.log("resultadoFactorial =" + resultadoFactorial + "*" + variable)
//         resultadoFactorial = resultadoFactorial * variable

//     }


//     resultadoFactorial = 1
//     variable = 1
//     while (variable <= factorial) {
//         resultadoFactorial = resultadoFactorial * variable
//         variable = variable + 1

//     }
// }
// resultadoFactorial = 1
// variable = 1
// do {
//     console.log("resultadoFactorial =" + resultadoFactorial + "*" + variable)
//     resultadoFactorial = resultadoFactorial * variable





// } while (variable > factorial)

function ejercicios() {
    var concatenacion = 0
    var arregloString = ["sony", "IRT", "Panasonic", "Philips"]
    for (i = 0; i < arregloString.length; i = i + 1) {
        console.log("Elemento del arreglo es :" + arregloString)
        concatenacion = concatenacion + arregloString[i]
        // var arregloNumeros = [42, 33, 55, 80]
        // console.log(typeof arregloNumeros)
        // console.log(arregloNumeros)
        // console.log(arregloNumeros[2])
        // console.log(arregloNumeros.length)
        // var suma = 0, promedio = 0
        // for (i = 0; i < arregloNumeros.length; i = i + 1) {
        //     console.log(arregloNumeros[i])
        //     suma = suma + arregloNumeros[i]
        // }
        // promedio = suma / arregloNumeros.length
        // console.log("el promedio es =" + promedio)
    }
    console.log("La concatenacion es =" + concatenacion)
}
