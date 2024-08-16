//implementar una funcion que logre seleccionar los inputs y ademas verificar que todos los datos esten ingresados
const axios = require("axios");

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Fantasy",
  "Sci-Fi",
  "Drama",
  "Terror",
  "Romance",
];

const buttonCrear = document.getElementById("buttonCrear");
const buttonLimpiar = document.getElementById("buttonLimpiar");

//id del div que contendra a todos los inputs checkboxes que crearemos aqui
const options = document.getElementById("options");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

//funcion que renderizara los generos y que maneja evento de limpieza
function renderGenres() {
  options.innerHTML = "";
  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;

    label.htmlFor = genre;
    label.textContent = genre;

    options.appendChild(input);
    options.appendChild(label);
  }
  return options;
}
renderGenres();

//funcion que valida que tos los campos de los ckeckbox esten completos
function validateCheckboxs() {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  //que esten en este array vacio todos los inputs que esten marcados
  const genres = [];
  for (const item of checkboxes) {
    if (item.checked) {
      item.classList.add("selected");
      genres.push(item.id);
    }
  }
  return genres;
}

//funcion que maneja  el evento de envio  de formulario y validar que los datos esten completos
function handlerSubmit(event) {
  //preventDefault para evitar que se recargue la pagina
  event.preventDefault();
  const genres = validateCheckboxs();
  if (
    ![
      title.value,
      year.value,
      director.value,
      duration.value,
      rate.value,
      poster.value,
      genres,
    ].every(Boolean)
  )
    return alert("faltan llenar campos");

  //? paquete creado para enviar al bkack con el axios
  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    rate: rate.value,
    poster: poster.value,
    genre: genres,
  };
  //?conexion con la base de datos del back para crear pelis del nuestro form
  axios.post("http://localhost:3000/movies", movie);

  alert("pelicula enviada");
}
//funcion para limpiar todos los campos
function cleanForms() {
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxs = document.querySelectorAll('input[name="genre[]"]');
  for (const item of checkboxs) {
    item.checked = false;
    item.classList.remove("selected");
  }
}

buttonCrear.addEventListener("click", handlerSubmit);
buttonLimpiar.addEventListener("click", cleanForms);
