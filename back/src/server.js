//! ACTIVIDAD 06
//? Requerir express y crear el objeto app dentro del módulo server.js. Exportar este objeto.

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexRoute");

const app = express();

//? Middlewares pre-build
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//?Middlewares personalizados
app.use((req, res, next) => {
  console.log("Mi primer middleware 🦾");
  next();
});

const miMiddleware = (req, res, next) => {
  console.log(
    `Hemos recibido una request de tipo ${req.method} al endpoint ${req.url}`
  );
  next();
};

app.use(miMiddleware);

app.use(router);
module.exports = app;

