//const axios = require("axios");
//requerimos el modelo
const Movie = require("../models/Movie");

// const getMovieService = async () => {
//   try {
//     const movies = await axios("https://students-api.up.railway.app/movies");
//     return movies.data;
//   } catch (error) {
//     console.log(error.message);
//     throw error.message;
//   }
// };

const getMovieService = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    //console.log(error.message);
    throw error.message;
  }
};

module.exports = {
  getMovieService,
};
