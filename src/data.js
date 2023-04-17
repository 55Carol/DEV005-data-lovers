
//funcion para traer años hacia
//metodo sort aplicado en años de peliculas en orden descendente

//crear funcion para introducir datos de arreglo años de manera ascendente
export const yearsAscendente = (peliculaSas) => { //      //añadir otro parametro  //

  return peliculaSas.sort(function (a, b) {
    if (a.release_date < b.release_date) {
      return -1;
    }
    if (a.release_date > b.release_date) {
      return 1;
    }
    if (a.release_date === b.release_date) {
      return 0;
    }
  });
}
//crear funcion para introducir datos de arraglo años de manera descendente 
export const yearsDescendente = (peliculas) => {
  return peliculas.sort(function (a, b) {
    if (a.release_date < b.release_date) {
      return 1;
    }
    if (a.release_date > b.release_date) {
      return -1;
    }
    if (a.release_date === b.release_date) {
      return 0;
    }
  })
}


//Metodo filter -filtrado por nombre de pelicula
//dataGhlibli= data
export const filtroPorNombre = (data, buscarNombre) => {
  const filterTitle = data.filter((film) => film.title.toLowerCase().indexOf(buscarNombre.toLowerCase()) > -1);
  return filterTitle;
};

