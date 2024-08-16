require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const dbConect = async () => {
  //realizar la conexion con la base de datos uzando la URL de mongoDb
  //await mongoose.connect("mongodb+srv://.........")

  //implementamos la conexion con la URL protegida en el archivo .env
  await mongoose.connect(`${MONGO_URI}`);
};

module.exports = dbConect;
