import { example } from './data.js';
import data from './data/ghibli/ghibli.js'; // importando datos desde ghibli.js a main.js
console.log(example, data);

const datosghibli = data.films;
console.log(datosghibli)

//Elementos del DOM
const search = document.querySelector('#search')

//Evento
search.addEventListener('keyup', () => {
    console.log(search.value);
}) 
for (let i = 0; i <= datosghibli.length; i++) {
    const nombrePeliculas = datosghibli[i].title
    console.log(nombrePeliculas);
}

