const express = require("express");
const app2 = express();
const mysql = require("mysql");
const cors = require("cors");

app2.use(express.json());
app2.use(cors());

// Conexion a la BD MySql
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mydb",
});

app2.listen(3003, () => {
  console.log("Server is running 3003");
});

// Cantidades totales de referencias
app2.get("/", (req, res) => {
  const SQLQuantity =
    "SELECT Referencias_Id_Referencia, Cantidades FROM equipos";

  db.query(SQLQuantity, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});
