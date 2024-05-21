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
  database: "logistik",
});

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

app2.listen(3003, () => {
  console.log("Server is running 3003");
});

app2.post("/seriales", (req, res) => {
  const sentRef = req.body.newRef;
  const sentSerial = req.body.newSerial;

  const SQL = "INSERT INTO seriales (id_Ref, Serial) VALUES (?,?)";

  const Values = [sentRef, sentSerial];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Cantidad Ok" });
    }
  });
});
