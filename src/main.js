import { titlesFilms } from './data.js';
import data from './data/ghibli/ghibli.js'; // importando datos desde ghibli.js a main.js
//Seleccionando la data que se va a usar en nuestro caso peliculas
const dataGhibli = data.films;

//Elementos del DOM
const search = document.querySelector('#search')
const filmsList = document.querySelector('.cards')
//const options = document.querySelector('#options')

//Funciones
function viewCard(names) {
  const view = titlesFilms(names)
  filmsList.innerHTML = view
}

//Eventos
window.addEventListener('DOMContentLoaded', async () => {
  filmsList.innerHTML = "<h1>Loading</h1>"
  viewCard(dataGhibli)
})

search.addEventListener('keyup', () => {
  const titlesMovies = dataGhibli.filter(film => `${film.title.toLowerCase()}`.includes(search.value.toLowerCase()))
  viewCard(titlesMovies)
})

/*options.addEventListener('click', () => {
  const years = dataGhibli.filter(year => `${year.release_date}`).includes(options.value)
  viewCard(years)
})*/