import { example } from './data.js';
import data from './data/ghibli/ghibli.js'; // importando datos desde ghibli.js a main.js
console.log(example, data);

const datosghibli = data.films;
console.log(datosghibli)


//Elementos del DOM para cuadro de busqueda por nombre de pelicula
const search = document.querySelector('#search')
//Evento
search.addEventListener('keyup', () => {
    console.log(search.value);
    filtradoPornombre(); //parametrizar  la funcion  y asi darle un argumento
}
) 
// for para iterar por cada nombre de cada pelicula
for (let i = 0; i <= datosghibli.length; i++) {
const nombrePeliculas = datosghibli.title
 
}

//Metodo filter -filtrado por nombre de pelicula 
datosghibli.filter(film => film.title.indexOf(search.value)>-1)
function filtradoPornombre() //parametro
{const resultado = datosghibli.filter(film => film.title.indexOf(search.value) > -1);
console.log(resultado);
} 


//Elemento del dom en botones de busqueda
 
//leer y guardar valor de caja de busqueda por puntaje
const puntaje = document.getElementById("puntaje").value;
console.log(puntaje);

//leer y guardar el valor de caja de busqueda por año
const año = document.getElementById("año").value;
console.log(año);
//metodo filter para puntaje



//metodo filter para año

//  forEach para Iterar -- solo sirve para array (estudiar a detalle)
//const ponster = []
let posters = ''
const contenedor = document.getElementById('contenedor')
datosghibli.forEach((datoObj) => {
    posters += 
    `
    <div class= "box" >
        <div class="tarjeta">${datoObj.title}
        </div>
        <div> <img class="posterPe" src="${datoObj.poster}">
        </div>
    </div> 
    `
    console.log(posters)
})
contenedor.innerHTML = posters

 





