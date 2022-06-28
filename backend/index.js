const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const promisePool = require("./lib/db");

app.use(cors());
//lectura y parseo del body
app.use(express.json());
// directorio publico
app.use(express.static("public"));

app.get("/", async (req, res) => {
    console.log(req.body)
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM database.pais LIMIT 0, 50"
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/pais/", async (req, res) => {
  try {
    const { pais } = req.body;
    const [rows] = await promisePool.query(
      `SELECT * FROM database.pais where paisnombre like "${pais}%" LIMIT 0, 50`
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/ciudad/", async (req, res) => {
  try {
    const { ciudad } = req.body;
    const [rows] = await promisePool.query(
      `select CiudadNombre from Ciudad where CiudadNombre like "${ciudad}%" limit 0,50 ;`
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// app.get("/", function (req, res) {
//   res.json({ msg: "Hello World" });
// });

app.listen(port, () =>
  console.log(`Servideor Corriendo en http://localhost:${port}/`)
);
