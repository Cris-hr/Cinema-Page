const Movie = require("../models/Movie");

const postMovieService = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    const createMovie = await newMovie.save();
    return createMovie;
  } catch (error) {
    throw error.message;
  }
};

module.exports = { postMovieService };
