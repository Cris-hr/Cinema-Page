const { getMovieService } = require("../services/movieServices");
const { postMovieService } = require("../services/postMovieService");

const moviesController = async (req, res) => {
  try {
    const movies = await getMovieService();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postMoviesController = async (req, res) => {
  try {
    const dataMovie = req.body;
    const newMovie = await postMovieService(dataMovie);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { moviesController, postMoviesController };
