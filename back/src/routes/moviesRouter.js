const { Router } = require("express");
const {
  moviesController,
  postMoviesController,
} = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", validateMovie, postMoviesController);

module.exports = moviesRouter;
