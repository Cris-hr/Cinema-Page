//! ACTIVIDAD 07
//? Requerir en el módulo index.js el objeto app y ejecutar su método listen, pasando los argumentos correspondientes.

require("dotenv").config()
const app = require("./src/server");
const dbConect = require("./src/config/dbConect");

//const PORT=3000
const {PORT}=process.env
dbConect()
  .then((res) => {
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Error al conectar con la BDD");
  });

//? http://localhost/3000/

//? index.js-->server.js--> routes/indexRoute.js -> routes/moviesRouter.js -> cotrollers/moviesController.js ->
