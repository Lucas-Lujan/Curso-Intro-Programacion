// declaración de variables //
const span = document.getElementById("papualfa")
const button = document.getElementById("button")
const input = document.getElementById("input")
const currentPlayerSpan = document.getElementById("current-player")
const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




let celdas = document.getElementsByClassName("celda")
let jugador1 = "X"
let jugador2 = "0"
let jugadorActual = jugador1

// span.innerText = "holaa"
// button.onclick = function () {

//     span.innerText = "queapretaspapu"
//     span.classList.toggle("")

// }


// input.onchange = (ev) => {

//     // console.log(ev)
//     // console.log(ev.target.value)

// }

// input.onkeydown = (ev) => {

//     //console.log(ev)
//     // console.log(ev.target.value)

// }

//span.classList.add("verde")
//span.classList.remove("rojo")
// span.classList.toggle("azul")

// for (let i = 0; i < celdas.lenght; i++) {
// console.log[celdas] 
// celdas[i].onclick = function() {
// console.log(`Ganaste`, i)


// }

// }

console.log(celdas)

let estado = []
let hayGanador = false 

console.log("Ganaste", celdas.length)
console.log(combinacionesGanadoras)


const coso = (item) => {
                return (estado[item[0]] === estado[item[1]]) && (estado[item[1]] === estado[item[2]]) && estado[item[0]] !== null
            }


for (let i = 0; i < celdas.length; i++) {
    estado.push(null)
    const celda = celdas[i]

    celda.onclick = function (ev) {
        celda.classList.add("rojo")
        

        if (estado[i]) return


        ev.target.innerText = jugadorActual
        estado[i] = jugadorActual

        console.log("mono",
            combinacionesGanadoras.map(coso).some((item) => item),
            combinacionesGanadoras.some(coso)
        )
        //combinacionesGanadoras.map(...).some((item) => !item) - ejemplo de un código

        hayGanador = combinacionesGanadoras.some(coso)

        if (hayGanador) {
            alert(`El ganador es ${jugadorActual}`)
            return
        }

        //cambiar jugador

        if (jugadorActual === jugador1) {
            jugadorActual = jugador2
        } else {
            jugadorActual = jugador1
        }
        // console.log(estado)

        currentPlayerSpan.innerText = `Turno de: ${jugadorActual}`


    }

    

    

}


// Supón que tienes 9 celdas con la clase "celda"
// const celdas = document.querySelectorAll('.celda');
// let turno = 'X'; // Comienza el jugador X
// let tablero = Array(9).fill(null); // Estado del tablero

// celdas.forEach((celda, i) => {
//   celda.onclick = function() {
//     if (!tablero[i]) { // Si la celda está vacía
//       celda.textContent = turno; // Marca la celda
//       tablero[i] = turno; // Guarda quién la tocó
//       turno = turno === 'X' ? 'O' : 'X'; // Cambia de turno
//     }
//   };
// // });
