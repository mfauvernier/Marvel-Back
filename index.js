require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Bienvenue");
});

const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");

app.use(comicsRoutes);
app.use(charactersRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started 🦸");
});
