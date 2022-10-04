const route = require("express").Router();
const paletasController = require("../controllers/paletas");
const { validId, validObjectBody } = require("../middleware/paleta");

route.get("/", function (req, res) {
    res.send("Olá XBM");
});

route.get("/all-paletas", paletasController.allPaletasController);

route.get("/one-paleta/:id", validId, paletasController.idPaletaController);

route.post("/create-paleta", validObjectBody, paletasController.createPaletaController);

route.put(
    "/update-paleta/:id",
    validId,
    validObjectBody,
    paletasController.updatePaletaController
);

route.delete("/delete-paleta/:id", validId, paletasController.deletePaletaController);

module.exports = route;
