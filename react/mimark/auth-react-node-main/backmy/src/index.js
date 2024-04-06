// 1--
import express from "express";
import mysql from "mysql";
import myConn from "express-myconnection";
import cors from "cors";
import routes from "./routes/routes.js";
import authRoutes from "./routes/authroutes.js"
import clientrouts from "./routes/clientroutes.js";
import persroutes from "./routes/persroutes.js";
import rolroutes from "./routes/rolroutes.js";
import proveedorlist from "./routes/proveedor.js";
import clientelist from "./routes/clientesroutes.js";
import categoria from "./routes/categoria.js";




// 12 - Agrego el middleware para parser los datos a JSON, OJO se debe instalar npm i body-parser
import bodyParser from "body-parser";


// 6 - Definimos la constante para almacenar los parametros de conexion a la BdD ==> const dbOptions
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "minimercado",
};

//2 - Creamos la instancia del servidor
const app = express();
app.use(cors(dbOptions));

app.set("port", process.env.PORT || 9000);

// 13 - usamos bodyParser
app.use(bodyParser.json());

//4 - Creamos el middleware para la gestion con la BdD
app.use(myConn(mysql, dbOptions, "single"));

// 9 - Usando las rutas despues de importar el archivo de rutas
app.use("/productos", routes);
app.use("/cliente", clientrouts);
app.use("/personal", persroutes);
app.use("/rol", rolroutes);
app.use("/proveedor", proveedorlist);
app.use("/auth",authRoutes);
app.use("/cliente", clientelist);
app.use("/categoria", categoria);

// 5-  Creo la ruta base
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API conectandome a MySQL...");
});

// 7 - Agregamos otra ruta
// 8 - Creamos un archivo para las ruta  ./routes.js
// 9 - Ahora importo el archivo (en la linea 6) y las uso en la linea 28
//        app.use("/Piezas", routes);

//3 - Hacemos que el servidor se ejecute en un puerto especifico
app.listen(app.get("port"), () => {
  console.log("Server listening on port ", app.get("port"));
});

// 10 - Creamos el archivo (request.http la extencion .http es obligatoria) con el que vamos a hacer las pruebas de los endpoints y la extension REST CLIENT
