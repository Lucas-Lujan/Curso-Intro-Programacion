const input = document.getElementById("input1")
console.log(input)
const submit = document.getElementById("submit")
submit.onclick = (e) =>{
    console.log(input.value)
    e.preventDefault()
}