const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Crear usuario
router.post("/", (req, res) => {
  const user = new userSchema(req.body); // Usa `new` para crear una instancia
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los usuarios
router.get("/", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un usuario por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

// Eliminar un usuario
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un usuario
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
