const renderMovies = require("./renderCards");
const axios = require("axios");

//!HOMEWORK 6: ASINCRONISMO
//? implementamos nuestra funcion getMovie de la linea 4, con la peticion http de axios:

const getMovie = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const data = response.data;
    data.map(renderMovies);

    //console.log(response.data)
  } catch (err) {
    //console.log("Error al obtener las peliculas:",err);
  }
};
module.exports = getMovie;
