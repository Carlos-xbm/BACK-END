require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const route = require("./src/routes/paletas");
const connectToDatabase = require("./src/database/database");

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use("/paletas", route);

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`);
});
