const express = require("express");
const animales = require("./animales");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/animales", function (req, res) {
  res.send(animales);
});
app.get("/perros", function (req, res) {
  res.send(animales.perros);
});
app.get("/gatos", function (req, res) {
  res.send(animales.gatos);
});

app.post("/animales", function (req, res) {
  let tipo = req.body.tipo;
  let animal = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    raza: req.body.raza,
  };
  animales[tipo].push(animal);
  console.log(req.body);
  res.send(animales);
});

app.listen(3000);
