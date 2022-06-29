const express = require("express");
const cors = require("cors");
const promisePool = require("./lib/db");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/api/c", async (req, res) => {
  // console.log(req.query);
  try {
    const { q } = req.query;
    if (q === "") {
      res.json({
        data: [],
      });
    }
    const [rows] = await promisePool.query(
      `select CiudadID as id , CiudadNombre as name from Ciudad where CiudadNombre like "${q}%" limit 0,50 ;`
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/api/p", async (req, res) => {
  // console.log(req.query);
  try {
    const { q } = req.query;
    const [rows] = await promisePool.query(
      `SELECT PaisNombre as name FROM database.pais where paisnombre like "${q}%" LIMIT 0, 50`
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// app.get("/pais", async (req, res) => {
//   try {
//     const { pais } = req.body;
//     const [rows] = await promisePool.query(
//       `SELECT PaisNombre FROM database.pais where paisnombre like "${pais}%" LIMIT 0, 50`
//     );
//     res.json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });

// app.get("/ciudad", async (req, res) => {
//   try {
//     const { ciudad } = req.body;
//     const [rows] = await promisePool.query(
//       `select CiudadNombre from Ciudad where CiudadNombre like "${ciudad}%" limit 0,50 ;`
//     );
//     res.json({
//       data: rows,
//     });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });

// app.get("/", function (req, res) {
//   res.json({ msg: "Hello World" });
// });

app.listen(port, () =>
  console.log(`Servideor Corriendo en http://localhost:${port}/`)
);
