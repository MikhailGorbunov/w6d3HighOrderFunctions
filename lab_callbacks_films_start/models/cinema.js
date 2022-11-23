const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function () {
const titles = this.films.map((film) => {return film.title; });
return titles;
}


Cinema.prototype.getFilmByTitle = function (title) {
  const films = this.films.filter(film => film.title === title);
  return films[0];
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  const film = this.films.filter(film => film.genre === genre);
  return film;
}

Cinema.prototype.checkFilmsFromYear = function (year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.checkFilmsLength = function (minLength) {
  return this.films.every(film => film.length >= minLength);
}

Cinema.prototype.calculateTotalRunningTime = function () {
  return this.films.reduce((accumulator, film) => film.length + accumulator, 0);
}

Cinema.prototype.filterFilmsByProperty = function (property, value) {
  const film = this.films.filter(film => film[property] === value);
  return film;
}