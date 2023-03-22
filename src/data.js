// Función para imprimir datos en pantalla
export const titlesFilms = names => names.map(name => `
<div class="card">
  <div class="title"><h2>${name.title}</h2></div>
  <div class="img">
    <img src="${name.poster}" alt="movies">
  </div>
  <div class="text">
    <div class="score"><h3>Score: ${name.rt_score}</h3></div>
    <div class="year"><h4>Year: ${name.release_date}</h4></div>
  </div>
</div>`).join('')

/*export const yearsFilms = years => years.map(year => `
<option> ${year.release_date} </option>
`).join('')


export const anotherExample = () => {
  return 'OMG';
};*/