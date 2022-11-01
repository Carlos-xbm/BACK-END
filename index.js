require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./src/database/database");

const PORT = process.env.PORT || 3001;
const app = express();
const paletaRoute = require("./src/paletas/routes/paletas");
const userRoute = require("./src/users/routes/users");
const authRoute = require("./src/auth/route");
const carrinhoRoute = require("./src/paletas/carrinho/routes/carrinho");

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/paletas", paletaRoute);
app.use("/carrinho", carrinhoRoute,);

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`);
});
