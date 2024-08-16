module.exports = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (![title, year, director, duration, genre, rate, poster].every(Boolean))
    return res.status(400).json({ mesage: "faltan datos" });

  if (
    isNaN(year) ||
    year < 0 ||
    year.toString().length < 4 ||
    year.toString().length > 4
  )
    return res
      .status(400)
      .json({ message: "El año que ingresaste no es de formato valido" });
  if (rate < 1 || rate > 10)
    return res
      .status(400)
      .json({ message: "La puntuacion debe ser entre el rango de 1 y 10" });

  if (typeof title !== "string")
    return res
      .status(400)
      .json({ message: "El formato ingresado no es valido" });

  next();
};
