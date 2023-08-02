const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const autosRoutes = require("./source/routes/Autos.routes")

dbConnection();

app.use(cors());
app.use(express.json())
app.use("/autos", autosRoutes)

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
