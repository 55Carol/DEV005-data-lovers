import data from './data/ghibli/ghibli.js';
import { yearsAscendente, yearsDescendente, filtroPorNombre } from './data.js';

//guardar data en una variable-
const dataGhibli = data.films


//(del index Html) Elementos del DOM
//botones de barra menu
//selectores del DOM
const recorrido = document.getElementById("recorrido");//variable de recorrido for each
const search = document.querySelector('#search');//variable de boton filtrar por nombre , caja de busqueda por nombre 
const botonyears = document.getElementById("years"); // variable de boton ordenar por años



// eventos del DOM
//evento de cuadro de busqueda por nombre 
search.addEventListener("keyup", function () {
  const buscarNombre = search.value;
  const resultadoDeFiltro = filtroPorNombre(data.films, buscarNombre);
  pintar(resultadoDeFiltro); //pinta en panatalla
});



//evento de boton orden por años
botonyears.addEventListener("change", function (evento) {
  const selectYears = evento.target.value;
  if (selectYears === "ascendente") {
    const ordenarYearsAsc = yearsAscendente(dataGhibli);

    pintar(ordenarYearsAsc);
  }
  else {
    const ordenarYearsDesc = yearsDescendente(dataGhibli);
    //mostrar data de peliculas en orden ascendente mostrar data de peliculas en orden descendente
    pintar(ordenarYearsDesc);
  }
})



//crear funcion mostrar -- para ingresar data y reutilizar
//forEach para recorrer las peliculas 
data.films.forEach((film) => {
  const templeS = `
<article>
<img class="pintarposter" src= "${film.poster}"/>
</article>`
  recorrido.innerHTML += templeS;
})

//función para pintar en pantalla imagenes peliculas
function pintar(films) {
  recorrido.innerHTML = ""
  let contenido = ""
  films.forEach((film) => {
    const pintarPeliculas = `
<article>
<img class="pintarposter" src= "${film.poster}"/>
</article>`
    contenido = contenido + pintarPeliculas
  })
  recorrido.innerHTML = recorrido.innerHTML + contenido
}

//funcion para filtrar titulos de peliculas
//dataGhibli = data

//function filtroPornombre(title) {
//return dataGhibli(data.films, title);
//} 

