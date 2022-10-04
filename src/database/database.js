const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose
        .connect("mongodb+srv://root:admin@api-elgeladon.nho4izt.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MONGO_DB CONECTADO ATLAS");
        })
        .catch((err) => {
            return console.log(`Erro na conexão com o banco: ${err}`);
        });
}
module.exports = connectToDatabase;
