const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Importa los routers
const usersRouter = require("./routes/userRoutes");
const recognizedRouter = require("./routes/recognizedRouter");
const experimentalRouter = require("./routes/experimentalRouter");

// Configuración
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use("/api/users", usersRouter); // Ruta para usuarios
app.use("/api/recognized", recognizedRouter); // Ruta para reconocimiento
app.use("/api/experimental", experimentalRouter); // Ruta experimental

// Ruta raíz
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Escuchar en el puerto
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
