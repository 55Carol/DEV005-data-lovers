import { yearsAscendente, yearsDescendente, filtroPorNombre } from '../src/data.js';

//REMPLAZANDO por funcion data ascendente 
describe('yearsAscendente', () => {
  const dataordenyear = [{ "title": "Zmovie1", "release_date": "2000", }, { "title": "My Neighbor Totoro", "release_date": "1988", }, { "title": "Isao Takahata", "release_date": "19", }, { "title": "Zmovie1", "release_date": "2000", },]
  const ordenadoyearasc = [{ "title": "Isao Takahata", "release_date": "19", }, { "title": "My Neighbor Totoro", "release_date": "1988", }, { "title": "Zmovie1", "release_date": "2000", }, { "title": "Zmovie1", "release_date": "2000", },]
  it('is a function', () => {

    expect(typeof yearsAscendente).toBe('function');
  });

  it('retorna years ordenado asc ', () => {
    expect(yearsAscendente(dataordenyear)).toEqual(ordenadoyearasc);

  });
});

//remplazando por funcion data desc 
describe('yearsDescendente', () => {
  const dataiordenyear2 = [{ "title": "Zmovie1", "release_date": "2000", }, { "title": "My Neighbor Totoro", "release_date": "1980", }, { "title": "Isao Takahata", "release_date": "1999", }, { "title": "My Neighbor Totoro", "release_date": "1980", },]
  const ordenaryearsdesc = [{ "title": "Zmovie1", "release_date": "2000", }, { "title": "Isao Takahata", "release_date": "1999", }, { "title": "My Neighbor Totoro", "release_date": "1980", }, { "title": "My Neighbor Totoro", "release_date": "1980", },]
  it('is a function', () => {

    expect(typeof yearsDescendente).toBe('function');
  });

  it('retorna years ordenado desc', () => {
    expect(yearsDescendente(dataiordenyear2)).toEqual(ordenaryearsdesc);
  });
});




//remplazando por funcion filtrado
describe('filtroPorNombre', () => {
  const datafiltrotitulos = [{ "title": "Zmovie1", "release_date": "2000", }, { "title": "My Neighbor Totoro", "release_date": "1980", }, { "title": "Isao Takahata", "release_date": "1999", },]
  const filtrartitulos = [{ "title": "Zmovie1", "release_date": "2000", }, { "title": "My Neighbor Totoro", "release_date": "1980", },]
  it('is a function', () => {

    expect(typeof filtroPorNombre).toBe('function');
  });

  it('retorna titulos de peliculas filtrados', () => {
    expect(filtroPorNombre(datafiltrotitulos, "M")).toEqual(filtrartitulos);
  });
});
