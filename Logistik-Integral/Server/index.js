const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Conexion a la BD MySql
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mydb",
});

app.listen(3002, () => {
  console.log("Server is running 3002");
});

// Registro de nuevos usuarios OK!
app.post("/registro", (req, res) => {
  const sentUsername = req.body.name;
  const sentUserLastName = req.body.lastname;
  const sentUserID = req.body.id;
  const sentUserPhone = req.body.phone;
  const sentRol = req.body.role;
  const sentPassword = req.body.password;
  const sentNumber = req.body.werehouseNUmber;

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
      res.send({ message: "User added!!" });
    }
  });
});

// Registered users login query
app.post("/login", (req, res) => {
  const SentUsername = req.body.name;
  const SentRol = req.body.rol;
  const SentPassword = req.body.password;

  const SQL =
    "SELECT * FROM usuarios WHERE Nombre = ? && Cargo = ? && Contraseña = ?";

  const Values = [SentUsername, SentRol, SentPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    }

    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: "Credenciales no existen!" });
    }
  });
});

// Crear nueva referencia (Rol Admin)
app.post("/newReference", (req, res) => {
  const sentFamila = req.body.familia;
  const sentNewReference = req.body.referencia;
  const sentNewModelo = req.body.modelo;
  const sentNewMarca = req.body.marca;
  const sentNewValor = req.body.valor;
  const sentNewCPU = req.body.CPU;
  const sentNewStorage = req.body.storage;
  const sentNewDisplay = req.body.display;
  const sentNewBateria = req.body.bateria;

  let sentModulo;

  switch (sentFamila) {
    case "Laptop":
      sentModulo = "1";
      break;
    case "Tablet":
      sentModulo = "2";
      break;
    case "Smartphone":
      sentModulo = "3";
      break;
    default:
      break;
  }

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
      res.send({ message: "Reference added!!" });
    }
  });
});

// Cantidades totales x referencia
app.post("/cantidad", (req, res) => {
  const sentRef = req.body.newRef;
  const sentCant = req.body.newCantidad;
  const sentDate = req.body.newDate;

  const SQL4 =
    "INSERT INTO equipos (Referencias_Id_Referencia, Cantidades, Fecha_Ingreso) VALUES (?,?,?)";

  const Values4 = [sentRef, sentCant, sentDate];

  db.query(SQL4, Values4, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Cantidad Ok" });
    }
  });
});

// Crear solicitud de envio
app.post("/solicitud", (req, res) => {
  const sentRef = req.body.id_Ref;
  const sentIdReceiver = req.body.idReceiver;
  const sentQuantity = req.body.quantity;
  const sentStatus = "En proceso";
  const sentWorth = req.body.worth;
  const sentDate = req.body.fecha;

  const SQL =
    "INSERT INTO solicitudes (Id_Referencia, Destinatarios_Id_Destinatario, Cantidad, Estado_Solicitud, Valor_Total, Fecha) VALUES (?,?,?,?,?,?)";
  const Values = [
    sentRef,
    sentIdReceiver,
    sentQuantity,
    sentStatus,
    sentWorth,
    sentDate,
  ];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Cantidad Ok" });
    }
  });
});

// Crear detalles del envio
app.post("/detalles", (req, res) => {
  const sentId = req.body.cedula;
  const sentName = req.body.nombre;
  const sendLastName = req.body.apellido;
  const sentAdress = req.body.direccion;
  const sentCity = req.body.ciudad;
  const sentNumber = req.body.telefono;
  let sentObservation = req.body.observaciones;

  if (sentObservation === "") sentObservation = "Sin observaciones";

  const SQL =
    "INSERT INTO destinatarios (Cedula, Nombres, Apellidos, Direccion, Ciudad, Telefono, Observaciones) VALUES (?,?,?,?,?,?,?)";

  const Values = [
    sentId,
    sentName,
    sendLastName,
    sentAdress,
    sentCity,
    sentNumber,
    sentObservation,
  ];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Ok" });
    }
  });
});

// To register warehouse inventories exit
app.post("/salidas", (req, res) => {
  const SentBrand = req.body.brand;
  const SentRef = req.body.ref;
  const SentSerial = req.body.serial;
  const SentDate = req.body.date;

  const SQL = "INSERT INTO salidas (Brand, Ref, Serial, Date) VALUES (?,?,?,?)";

  const Values = [SentBrand, SentRef, SentSerial, SentDate];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Ok" });
    }
  });
});

app.post("/seriales", (req, res) => {
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

// --------------------------------------------------------------------------------------------------------------

// References and total amounts
app.get("/", (req, res) => {
  const SQLReferencias =
    "SELECT referencias.Modulos_Id_Modulo as Family, referencias.Id_Referencia as Id_Ref, referencias.Referencia_Equipo as Ref, referencias.Marca, count(seriales.id_Serial) as Total FROM referencias inner join seriales on referencias.Id_Referencia = seriales.id_Ref GROUP BY referencias.Referencia_Equipo";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// Solicitude por referencia
app.get("/refQuntity", (req, res) => {
  const SQLReferencias =
    "SELECT solicitudes.Id_Referencia as ref, sum(solicitudes.Cantidad) as total FROM `solicitudes` WHERE solicitudes.Estado_Solicitud = 'En proceso' GROUP by solicitudes.Id_Referencia";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// Seriales totales
app.get("/seriales", (req, res) => {
  const SQL = "SELECT * FROM `seriales`";

  db.query(SQL, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log("todo Ok");
    }
  });
});

// Obtener todas las referencias de la DB
app.get("/sqlReferencias", (req, res) => {
  const SQLReferencias = "SELECT * FROM referencias";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log("todo Ok");
    }
  });
});

// Obtener el ultimo id de la tabla destinatarios
app.get("/detailsId", (req, res) => {
  const SQLReferencias =
    "SELECT Id_Destinatario FROM `destinatarios` ORDER BY Id_Destinatario DESC LIMIT 1;";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log("todo Ok");
    }
  });
});

// Solicitudes del cliente
app.get("/RequestsData", (req, res) => {
  const SQLReferencias =
    "SELECT Destinatarios_Id_Destinatario as Id, GROUP_CONCAT(Numero_Solicitud) as request, SUM(Cantidad) as quantity, Fecha as date, Estado_Solicitud as status, destinatarios.Observaciones as observations from solicitudes inner join destinatarios on solicitudes.Destinatarios_Id_Destinatario = destinatarios.Id_Destinatario GROUP by Destinatarios_Id_Destinatario;";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log("todo Ok");
    }
  });
});

// Single Request
app.get("/RequestInfo", (req, res) => {
  const SQLReferencias =
    "SELECT solicitudes.Numero_Solicitud as Id, solicitudes.Destinatarios_Id_Destinatario as IdDestinatario, solicitudes.Cantidad, referencias.Id_Referencia as IdRef, referencias.Modulos_Id_Modulo as Familia , referencias.Referencia_Equipo as Referencia, referencias.Marca from solicitudes INNER join referencias on solicitudes.Id_Referencia = referencias.Id_Referencia ORDER BY IdDestinatario ASC";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log("todo Ok");
    }
  });
});

app.get("/ReceiverInfo", (req, res) => {
  const SQLReferencias = "SELECT * FROM `destinatarios`";

  db.query(SQLReferencias, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.get("/Registros/:firstDate/:secondDate", (req, res) => {
  const SentStartDate = req.params.firstDate;
  const SentFinishDate = req.params.secondDate;
  const gestion = "Gestionada con exito";
  const SQLReferencias = `SELECT referencias.Marca, solicitudes.Id_Referencia as Id_Ref, solicitudes.Cantidad, referencias.Referencia_Equipo as Referencia, solicitudes.Fecha, destinatarios.Numero_Guia, solicitudes.Fecha_Envio from solicitudes inner join destinatarios on solicitudes.Destinatarios_Id_Destinatario = destinatarios.Id_Destinatario INNER join referencias on solicitudes.Id_Referencia = referencias.Id_Referencia where solicitudes.Estado_Solicitud = ? and solicitudes.Fecha_Envio BETWEEN ? and ?`;

  db.query(
    SQLReferencias,
    [gestion, SentStartDate, SentFinishDate],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/Codigo/:id", (req, res) => {
  const SentMail = req.params.id;
  const SQLReferencias = `SELECT Codigo from nuevo_usuario WHERE Correo = ?`;

  db.query(SQLReferencias, [SentMail], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// -------------------------------------------------------------------------------------------------
app.delete("/ser/:id", (req, res) => {
  const SentID = req.params.id;

  const SQL = "DELETE FROM `seriales` WHERE id_Serial = ?";

  db.query(SQL, [SentID], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.put("/ReceiverInfo/:id", (req, res) => {
  const SentID = req.params.id;
  const SentNumer = req.body.guia;

  const SQL =
    "UPDATE destinatarios set `Numero_Guia` = ? WHERE Id_Destinatario = ? ";

  db.query(SQL, [SentNumer, SentID], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.put("/RequestsData/:id", (req, res) => {
  const SentID = req.params.id;
  const SentDate = req.body.date;
  const status = "Gestionada con exito";

  const SQL =
    "UPDATE solicitudes set `Estado_Solicitud` = ?, `Fecha_Envio` = ? WHERE Destinatarios_Id_Destinatario = ? ";

  db.query(SQL, [status, SentDate, SentID], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
});
