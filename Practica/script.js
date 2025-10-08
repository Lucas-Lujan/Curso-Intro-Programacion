// declaración de variables //
const span = document.getElementById("papualfa")
const button = document.getElementById("button")
const input = document.getElementById("input")
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

console.log("Ganaste",celdas.length)


for(let i = 0; i < celdas.length; i++) {
    estado.push(null)
    const celda = celdas[i]

    celda.onclick = function (ev) {
        celda.classList.add("rojo")
        if (estado[i]) return


        ev.target.innerText = jugadorActual
        estado[i] = jugadorActual
        if (jugadorActual === jugador1) {
            jugadorActual = jugador2
        } else {
            jugadorActual = jugador1
        }
        console.log(estado)


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
