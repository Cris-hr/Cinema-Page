const sectionMovie = document.getElementById("films");

const renderMovies = (movie) => {
  //tempData.map((movie) => {
  //console.log(movie);
  const movieButton = document.createElement("button");
  const movieArticle = document.createElement("article");
  const movieDivDos = document.createElement("div");
  const movieDiv = document.createElement("div");

  movieButton.classList.add("mostrar");
  movieArticle.classList.add("card__inner", "card__side", "card__side--front");
  movieDiv.classList.add("card__side", "card__side--back");
  movieDivDos.classList.add("card-imag");

  movieDivDos.innerHTML = `<img src="${movie.poster}" alt=${movie.title} > `;

  movieDiv.innerHTML = `<h3>${movie.title}</h3> <p><strong>Año:</strong> ${
    movie.year
  }</p> <p><strong>Director: </strong> ${
    movie.director
  }</p> <p><strong>Duracion: </strong> ${
    movie.duration
  }</p> <p><strong>Genero: </strong> ${movie.genre.join(
    ", "
  )}</p> <p><strong>Rate: </strong> ${movie.rate}</p>`;

  movieButton.appendChild(movieArticle);
  movieArticle.appendChild(movieDiv);
  movieArticle.appendChild(movieDivDos);
  sectionMovie.appendChild(movieButton);
};
module.exports = renderMovies;
