// declaración de variables //
const span  = document.getElementById("papualfa")
const button = document.getElementById("button")
const input = document.getElementById ("input")
const celdas = document.getElementsByClassName("celda")

span.innerText="holaa"
button.onclick = function () {

    span.innerText="queapretaspapu" 
    span.classList.toggle("")

}


input.onchange= (ev) => {

    console.log(ev)
    console.log(ev.target.value)
    
}

input.onkeydown= (ev) => {

    console.log(ev)
    console.log(ev.target.value)

}

//span.classList.add("verde")
//span.classList.remove("rojo")
span.classList.toggle("azul")


