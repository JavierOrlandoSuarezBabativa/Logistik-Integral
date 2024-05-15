const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("Server is running 3002");
});

// Conexion a la BD MySql
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "logistik",
});

// Registro de nuevos usuarios
app.post("/registro", (req, res) => {
  const sentUsername = req.body.UserName;
  const sentUserLastName = req.body.UserLastName;
  const sentUserID = req.body.UserID;
  const sentUserPhone = req.body.UserPhone;
  const sentRol = req.body.UserRol;
  const sentPassword = req.body.UserPassword;
  const sentNumber = req.body.UserNumber;

  console.log(req.body);

  const SQL =
    "INSERT INTO usuarios (Nombre, Apellido, Cedula, Celular, Cargo, Contraseña, Bodegas_Id_Bodega) VALUES (?,?,?,?,?,?,?)";

  const Values = [
    sentUsername,
    sentUserLastName,
    sentUserID,
    sentUserPhone,
    sentRol,
    sentPassword,
    sentNumber,
  ];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully");
      res.send({ message: "User added!!" });
    }
  });
});

// login de los usuarios ya registrados
app.post("/login", (req, res) => {
  const loginSentUsername = req.body.LoginUserName;
  const loginSentRol = req.body.LoginUserRol;
  const loginSentPassword = req.body.LoginUserPassword;

  const SQL =
    "SELECT * FROM usuarios WHERE Nombre = ? && Cargo = ? && Contraseña = ?";

  const Values = [loginSentUsername, loginSentRol, loginSentPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    }
    if (results.length > 0) {
      res.send(results);
      console.log("ingreso ok");
    } else {
      res.send({ message: "Credenciales no existen!" });
    }
  });
});

// Crear nueva referencia (Rol Admin)
app.post("/newReference", (req, res) => {
  const sentModulo = req.body.newFamilia;
  const sentNewReference = req.body.newReferencia;
  const sentNewModelo = req.body.newModelo;
  const sentNewMarca = req.body.newMarca;
  const sentNewValor = req.body.newValor;
  const sentNewCPU = req.body.newCPU;
  const sentNewStorage = req.body.newStorage;
  const sentNewDisplay = req.body.newDisplay;
  const sentNewBateria = req.body.newBateria;

  const SQL3 =
    "INSERT INTO referencias (Modulos_Id_Modulo, Referencia_Equipo, Modelo, Marca, Valor, CPU, Storage, Pulgadas, Bateria) VALUES (?,?,?,?,?,?,?,?,?)";

  const Values3 = [
    sentModulo,
    sentNewReference,
    sentNewModelo,
    sentNewMarca,
    sentNewValor,
    sentNewCPU,
    sentNewStorage,
    sentNewDisplay,
    sentNewBateria,
  ];

  db.query(SQL3, Values3, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Reference inserted successfully");
      res.send({ message: "Reference added!!" });
    }
  });
});

//
app.get("/sqlReferencias", (req, res) => {
  const SQLReferencias = "SELECT * FROM referencias";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});
