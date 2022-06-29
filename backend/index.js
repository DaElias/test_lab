const express = require("express");
const cors = require("cors");
const promisePool = require("./lib/db");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/", async (req, res) => {
  try {
    const {
      nombre,
      identificacion,
      telefono,
      direccion,
      departamento,
      id_ciudad,
      id_pais,
    } = req.body;

    const [rows] = await promisePool.query(
      `insert into database.Clientes (nombre,identificacion,telefono,direccion,departamento,id_ciudad,id_pais ) values 
    ("${nombre}","${identificacion}","${telefono}","${direccion}","${departamento}",${parseInt(id_ciudad)},"${id_pais}")`
    );

    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/api/c", async (req, res) => {
  // console.log(req.query);
  try {
    const { q } = req.query;
    if (q === "")
      res.json({
        data: [],
      });
    const [rows] = await promisePool.query(
      `select CiudadID as id , CiudadNombre as name from Ciudad where CiudadNombre like "${q}%" limit 0,100 ;`
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
    if (q === "")
      res.json({
        data: [],
      });
    const [rows] = await promisePool.query(
      `SELECT PaisNombre as name, PaisCodigo as id FROM database.pais where Paisnombre like "${q}%" LIMIT 0, 50`
    );
    res.json({
      data: rows,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(port, () =>
  console.log(`Servideor Corriendo en http://localhost:${port}/`)
);
