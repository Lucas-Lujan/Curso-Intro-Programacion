const nombre = "Lucas"; //constantes//
let edad = 21;
const saludo= `Hola, me llamo ${nombre} y tengo ${edad} años `;

console.log(nombre); //para que aparezca en la consola//
console.log (edad);
console.log (saludo);


console.log ("1"==1);
console.log ("1"===1); // primitivos //

const lista = [1, "hola", null];
lista.length;
console.log(lista);

function saludar (nombre) {
    console.log(`hola ${nombre}`);
    return `hola ${nombre} retorno`;


}
console.log (saludar (`Lucas`));
saludar (`Lucas`);