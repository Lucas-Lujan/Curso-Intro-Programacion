
const imagen = document.getElementById('imagen'); //Se toma la imagen del html.
const brillo = document.getElementById('brillo'); //Se toma el input del brillo del html.
const saturacion = document.getElementById('saturacion'); //Se toma el input de la saturación del html.
const opacidad = document.getElementById('opacidad'); // Se toma el input de la opacidad del html.
const reset = document.getElementById('reset'); //Se toma el botón de reset del html.


function aplicarFiltros() { //Como toda función, se trata de un código reutilizable. La función de acá cambia los filtros según los sliders.
  const valorBrillo = brillo.value; //se obtiene el valor del input del brillo.
  const valorSaturacion = saturacion.value; // ""
  const valorOpacidad = opacidad.value; // ""

  imagen.style.filter = `
    brightness(${valorBrillo}%)
    saturate(${valorSaturacion}%)
    opacity(${valorOpacidad}%)
  `;
}//acá se aplican los filtros a la imagen, osea brillo, saturación, opacidad. Es importante que no hayan espacios.


brillo.oninput = aplicarFiltros; //cada vez que se mueva el input del brillo, se ejecuta la función aplicarFiltros. El input va cambiando el valor es distinto al onclick.
saturacion.oninput = aplicarFiltros;
opacidad.oninput = aplicarFiltros;


reset.onclick = function() { //acá se usa onclick porque es un botón que se presiona, es distinto al oninput.
  brillo.value = 100; //reinicia el valor del brillo.
  saturacion.value = 100; //reinicia el valor de la saturación.
  opacidad.value = 100; //reinicia el valor de la opacidad.
  aplicarFiltros() //aplica los filtros con los valores reiniciados, o sea, sin filtros.

}