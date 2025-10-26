let offset = 0; // Desplazamiento inicial //
const limit = 5; // Cantidad de pokemones a cargar por solicitud //
const container = document.getElementById("pokemónContenedor"); // Contenedor para mostrar los pokemones //
const button = document.getElementById("cargarMás"); // Botón para cargar más pokemones //

function cargarPokemones() { // Función para cargar pokemones //
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`) // Solicitud HTTP a la API de Pokemones //
    .then(response => response.json()) // Convertir la respuesta a JSON //
    .then(data => { // Procesar los datos recibidos //
      data.results.forEach(pokemon => { // Iterar sobre cada pokemon //
        const p = document.createElement("p"); // Crear un elemento párrafo //
        p.textContent = pokemon.name; // Asignar el nombre del pokemon al párrafo //
        container.appendChild(p); // Agregar el párrafo al contenedor //
      }); 
    })
    .catch(error => console.error("Error:", error)); // Saldrá en la consola cuando algo salga mal en la ejecución de la promesa //
}

button.addEventListener("click", () => { // Evento para el botón de cargar más //
  offset += limit; // Incrementar el desplazamiento //
  cargarPokemones();
});

cargarPokemones();