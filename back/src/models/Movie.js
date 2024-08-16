const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});
//creamos el modelo pasndo como 1º argumento el nombre de la coleccion de nuestras peliculas que tenemos en mongoDB
//pero el nombre con la 1º letra en mayuscula y singular, 2º argumento el nombre del esquema que creamos
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
