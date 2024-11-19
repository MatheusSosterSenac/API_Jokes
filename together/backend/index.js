const express = require('express');
const sequelize = require('./src/config/database'); 
const PiadaRouter = require('./src/routes/Piada'); 
const UserRouter = require("./src/routes/user");
const authMiddleware = require("./src/middleware/authMiddleware");
const UserApi = require("./src/api/user");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.post("/api/v1/login", UserApi.login);
app.post("/api/v1/user", UserApi.createUser);
app.use("/api/v1/user", authMiddleware(), UserRouter);
app.use("/api/v1/piada", PiadaRouter);


sequelize.sync({ force: false }) 
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });
